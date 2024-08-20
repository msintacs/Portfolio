/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import CountUp from "react-countup";

function WinRate() {
  const totalSellamnt = 111210839000;
  const totalGames = Math.floor(totalSellamnt / 1000);
  const winningGames = 13;

  const oneInX = Math.round(totalGames / winningGames);

  return (
    <div className="mt-16 w-full border-l-8 border-neutral-400 pl-[100px] text-neutral-400">
      <div className="flex items-center font-SUIT-Heavy text-6xl">
        <span className="mr-12">TOTAL</span>
        <span className="w-96 text-center tabular-nums">
          <CountUp
            end={totalGames}
            duration={2.5}
            separator=","
            start={0}
            useEasing
            useGrouping
          />
        </span>
        <span className="ml-4">GAMES</span>
      </div>
      <div className="mt-4 text-3xl">
        <span className="mr-2">WINNING GAMES:</span>
        <span className="tabular-nums">
          <CountUp
            end={winningGames}
            delay={2.5}
            duration={2.5}
            separator=","
            start={0}
            useEasing
            useGrouping
          />
        </span>
        <span className="ml-2">GAME</span>
      </div>
      <div className="mt-4 flex w-full text-2xl">
        <div className="w-1/2">
          <span className="mr-2">WIN RATE:</span>
          <span className="tabular-nums">
            <CountUp
              end={(winningGames / totalGames) * 100}
              decimals={10}
              start={0}
              delay={5}
              duration={2.5}
              useEasing
              suffix="%"
            />
          </span>
        </div>
        <div className="w-[350px] text-center font-SUIT-Heavy text-7xl">
          <div className="border-b-4 border-neutral-400 pb-10">1</div>
          <div className="pt-10">
            <CountUp
              end={oneInX}
              start={0}
              delay={5}
              duration={2.5}
              separator=","
              useEasing
              useGrouping
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WinRate;
