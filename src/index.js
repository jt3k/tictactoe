import "./style";
import { Component } from "preact";
/*
0 | 1 | 2
--+---+--
3 | 4 | 5
--+---+--
6 | 7 | 8
 */
const winCombinations = {
  0: [
    [1, 2],
    [3, 6],
    [4, 8]
  ],
  1: [
    [0, 2],
    [4, 7]
  ],
  2: [
    [0, 1],
    [6, 4],
    [5, 8]
  ],
  3: [
    [0, 6],
    [4, 5]
  ],
  4: [
    [1, 7],
    [3, 5],
    [0, 8],
    [2, 6]
  ],
  5: [
    [2, 8],
    [3, 4]
  ],
  6: [
    [0, 3],
    [4, 2],
    [7, 8]
  ],
  7: [
    [1, 4],
    [6, 8]
  ],
  8: [
    [0, 4],
    [6, 7],
    [2, 5]
  ]
};

export default class App extends Component {
  initialState = {
    table: Array.from({ length: 9 }),
    isNextCross: true,
    isWin: false
  };
  state = { ...this.initialState };

  onClick = ({ target }) => {
    const { celIndex } = target.dataset;
    const { table, isNextCross } = this.state;
    //  Win or already filled
    if (this.state.isWin || table[celIndex]) {
      return;
    }

    const nextMark = isNextCross ? "×" : "□";
    const isWin = winCombinations[celIndex].some(combination =>
      combination.every(item => table[item] === nextMark)
    );

    this.setState({
      table: table.map((mark, index) =>
        index === Number(celIndex) ? nextMark : mark
      ),
      isNextCross: !isNextCross,
      isWin
    });
  };

  reset = () => {
    const intervalId = setInterval(() => {
      this.setState({
        isWin: false,
        table: Array.from({ length: 9 }, () =>
          Math.random()
            .toString(36)
            .slice(-1)
        )
      });
    });

    setTimeout(() => {
      clearInterval(intervalId);
      this.setState({ ...this.initialState });
    }, 1000);
  };

  render() {
    const { table, isWin, isNextCross } = this.state;
    return (
      <div>
        <h1>~tic tac toe~</h1>

        <dialog open={isWin}>
          ПОБЕДИЛ {isNextCross ? "КВАДРАТ" : "КРЕСТ"}!
          <button onClick={this.reset}>ищё</button>
        </dialog>

        <div class="table">
          {table.map((cel, celIndex) => (
            <div class="cell" onClick={this.onClick} data-cel-index={celIndex}>
              {cel}
            </div>
          ))}
          <br />
          <button onClick={this.reset}>ищё</button>
        </div>
      </div>
    );
  }
}
