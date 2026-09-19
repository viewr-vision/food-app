/** The research post, transcribed verbatim from the source document.
 *  Prose lives in Post.tsx; the tables live here so the markup stays readable. */

export const post = {
  slug: '/research/scaling-and-speeding-up-robots-in-the-real-world',
  title: 'Scaling and speeding up robots in the real world',
  lede: 'Speed is the final frontier that needs to be unlocked before we can see robots assisting humans in the real world.',
}

export interface Table {
  caption?: string
  columns: string[]
  /** Numeric columns are right-aligned; the first column is always a row header. */
  rows: Array<{ cells: string[]; strong?: number[] }>
}

export const speedupTable: Table = {
  caption: 'Contact window fixed at x = 0.5 s; each row is 500 real-robot runs on the same task and scene.',
  columns: ['Free-space speed-up', 'End-to-end task time vs. teleop data', 'Success rate'],
  rows: [
    { cells: ['1x (raw teleop data)', '1.00x', '94.2%'] },
    { cells: ['2x', '1.82x', '96%'] },
    { cells: ['3x', '2.63x', '97.4%'] },
    { cells: ['4x', '3.41x', '95.6%'], strong: [0, 1, 2] },
    { cells: ['5x', '4.02x', '82%'] },
    { cells: ['10x', '6.2x', '11%'] },
  ],
}

export const interventionTable: Table = {
  columns: ['Base policy (training-data speed)', '+ intervention data', 'Success rate', 'Speed vs. base policy'],
  rows: [
    { cells: ['1x', '—', '94.2%', '1.00x'] },
    { cells: ['1x', '200 interventions', '96.6%', '1.01x'] },
    { cells: ['2x', '—', '96%', '1.82x'] },
    { cells: ['2x', '200 interventions', '96.2%', '1.93x'] },
    { cells: ['4x', '—', '95.6%', '3.41x'] },
    { cells: ['4x', '200 interventions', '97.2%', '3.92x'], strong: [3] },
  ],
}

export const finalTable: Table = {
  columns: ['Configuration', 'Median Task time', 'Speed vs. teleop data', 'Success rate'],
  rows: [
    { cells: ['Teleoperation data (reference)', '37.3 s', '1.00x', '100%'] },
    { cells: ['Policy trained on raw data', '41.2 s', '0.9x', '94.2%'] },
    { cells: ['+ Lever 1 (adaptive 4x speed-up)', '12.1 s', '3.24x', '95.6%'], strong: [3] },
    { cells: ['+ Lever 2 (risk-gated chunk skipping)', '9.9 s', '3.76x', '93.8%'] },
    { cells: ['+ Lever 3 (sped-up intervention data)', '9.4 s', '3.97x', '95.2%'], strong: [1, 2] },
  ],
}
