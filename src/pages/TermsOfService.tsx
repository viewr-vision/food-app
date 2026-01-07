import '../App.css';
import './Legal.css';

export function TermsOfService() {
    return (
        <div className="page">
            <div className="page-content">
                <div className="legal-page">
                    <div className="legal-content">
                        <h1>Terms of Service</h1>
                        <span className="legal-update-date">Last Updated: January 7, 2026</span>

                        <p>
                            These Terms of Service ("Terms") govern your access to and use of Mr. Food's robotic systems, software, and services. By deploying our robots or accessing our platform, you agree to be bound by these Terms.
                        </p>

                        <h2>1. Use of Services</h2>
                        <p>
                            Mr. Food grants you a limited, non-exclusive, non-transferable license to use our robots and software for your internal business operations. You agree not to:
                        </p>
                        <ul>
                            <li>Reverse engineer, decompile, or disassemble any part of the hardware or software.</li>
                            <li>Modify safety interlocks or bypass security features.</li>
                            <li>Use the system for unlawful purposes or in environments for which it was not rated.</li>
                        </ul>

                        <h2>2. Liability and Safety</h2>
                        <p>
                            While our systems are designed with redundant safety features, robotics inherently involve moving machinery. You acknowledge that:
                        </p>
                        <ul>
                            <li><strong>Operator Training:</strong> Only trained personnel may interact with the robots. You are responsible for ensuring staff compliance with safety protocols.</li>
                            <li><strong>Operational Risks:</strong> Mr. Food is not liable for indirect, incidental, or consequential damages (including downtime or lost profits) arising from system errors, power failures, or misuse.</li>
                            <li><strong>Liability Cap:</strong> Our total liability for any claim shall not exceed the amount paid by you for the services in the six months preceding the claim.</li>
                        </ul>

                        <h2>3. Intellectual Property</h2>
                        <p>
                            All intellectual property rights in the hardware design, software code, AI models, and documentation remain the exclusive property of Mr. Food. Any feedback or suggestions you provide may be used by us without obligation to you.
                        </p>

                        <h2>4. Maintenance and Support</h2>
                        <p>
                            Our service level agreements (SLAs) define our commitment to uptime and response times. Unauthorized modification or repair of the hardware voids these warranties and may result in service termination.
                        </p>

                        <h2>5. Governing Law</h2>
                        <p>
                            These Terms are governed by the laws of the State of California, without regard to its conflict of laws principles.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
