#!/bin/bash

BUCKET_NAME="mrfood.ai"
REGION="us-east-1" # Default to us-east-1 for simplicity

echo "Deploying to AWS S3..."

# 1. Create Bucket
if aws s3 ls "s3://$BUCKET_NAME" 2>&1 | grep -q 'NoSuchBucket'; then
  echo "Creating bucket $BUCKET_NAME..."
  aws s3 mb "s3://$BUCKET_NAME" --region "$REGION"
else
  echo "Bucket $BUCKET_NAME already exists (or you don't have permission to list it)."
fi

# 2. Configure Static Website Hosting
echo "Configuring static website hosting..."
aws s3 website "s3://$BUCKET_NAME" --index-document index.html --error-document index.html

# 3. Disable Block Public Access (Required for public bucket policy)
echo "Disabling Block Public Access..."
aws s3api put-public-access-block \
    --bucket "$BUCKET_NAME" \
    --public-access-block-configuration "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"

# 4. Add Bucket Policy for Public Read Access
echo "Adding public read policy..."
POLICY='{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::'"$BUCKET_NAME"'/*"
        }
    ]
}'
aws s3api put-bucket-policy --bucket "$BUCKET_NAME" --policy "$POLICY"

# 5. Sync Files
echo "Syncing files to S3..."
aws s3 sync dist "s3://$BUCKET_NAME"

echo "Deployment complete!"
echo "Website URL: http://$BUCKET_NAME.s3-website-$REGION.amazonaws.com"
