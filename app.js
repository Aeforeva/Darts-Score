const players = [
  // {
  //   name: "mr.Placeholder",
  //   score: 420,
  //   wins: 1,
  //   id: 0,
  // },
];

new Vue({
  el: "#main",
  data: {
    players: players,
    max: 301,
    curScore: 0,
    activeId: 0,
    numberOfPl: 0,
    newPlayer: "",
    isGameStarted: false,
  },

  methods: {
    addNewPlayer: function () {
      if (this.newPlayer) {
        this.players.push({
          name: this.newPlayer,
          wins: 0,
          score: 0,
          id: this.numberOfPl,
        });
        this.isGameStarted = true;
        this.newPlayer = "";
        this.activeId = this.numberOfPl;
        this.numberOfPl++;
      }
    },
    setMax: function () {
      this.max = parseInt(event.target.textContent);
    },
    resetScore: function () {
      this.curScore = 0;
      players.forEach((element) => {
        element.score = 0;
      });
    },
    vScore: function () {
      this.curScore += parseInt(event.target.textContent);
      this.overScoreCheck();
    },
    overScoreCheck: function () {
      if (this.activePlayer.score + this.curScore > this.max - 1) {
        alert(`too much! switching to next player.`);
        this.curScore = 0;
        this.switchPlayer();
      }
    },
    reset: function () {
      this.curScore = 0;
    },
    confirm: function () {
      this.activePlayer.score += this.curScore;
      this.curScore = 0;
      this.checkWin();
      this.switchPlayer();
    },
    checkWin: function () {
      if (this.activePlayer.score === this.max) {
        this.activePlayer.wins++;
        this.resetScore();
        alert(`${this.activePlayer.name} win the game!`);
      }
    },
    switchPlayer: function () {
      if (this.activeId == this.players.length - 1) {
        this.activeId = 0;
      } else {
        this.activeId++;
      }
    },
  },

  computed: {
    activePlayer: function () {
      if (this.isGameStarted) {
        let ap = {};
        players.forEach((element) => {
          if (element.id === this.activeId) {
            ap = element;
          }
        });
        return ap;
      }
    },
    inactivePlayers: function () {
      if (this.isGameStarted) {
        let ip = [];
        players.forEach((element) => {
          if (element.id !== this.activeId) {
            ip.push(element);
          }
        });
        return ip;
      }
    },
  },
});
