import { useContext, useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { config } from "../../../../config";
import { Employe } from "../../../domain/employe";
import { SocketContext } from "../../context/SocketContext";

const EmployeChart = () => {
  const { socket } = useContext(SocketContext);
  const [data, setData] = useState<Employe[]>([]);

  useEffect(() => {
    socket?.on(config.socket.events.current_employes, (data: Employe[]) => {
      setData(data);
    });
  }, [socket]);

  return (
    <Bar
      width={50}
      height={25}
      data={{
        labels: data.map((employe) => employe.name),
        datasets: [
          {
            label: "# of Votes",
            data: data.map((employe) => employe.votes),
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      }}
      options={{
        animation: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      }}
    />
  );
};

export default EmployeChart;
