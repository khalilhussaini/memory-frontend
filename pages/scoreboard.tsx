import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import Navabar from "@/pages/components/Navbar";

export default function Scoreboard() {
  const [scores, setScores] = useState<{ username: string, score: number }[]>([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/scores")
      .then((response: Response) => {
        if (response.ok === false) throw new Error(`fatching score with this status: ${response.status}`)

        return response.json();
      })
      .then((data) => {
        const sortedscore = data.sort((a: any, b: any) => a.score - b.score);
        setScores(sortedscore);
      })
      .catch((error) => {
        console.error("error fetching score", error)
      });
  }, []);
  return <>
    <head>
      <title>Scoreboard</title>
      <meta name="description" content="Memory game scoreboard " />
    </head>
    <Navabar />
    <div className={styles.dashboardPage}>
      <div className={styles.title}>
        <h1 className="dasboardTitle">Scoreboard</h1>
        <div className={styles.dashboard}>
          <table className={styles.scoreTable}>
            <thead>
              <tr>
                <th>Number</th>
                <th>Username</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {
                scores.map((score, index) => (
                  <tr key={index}>
                    <td> {index + 1}</td>
                    <td> {score.username}</td>
                    <td> {score.score}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </>
}
