PlayerList = React.createClass({
  propTypes: {
    players: React.PropTypes.array.isRequired
  },

  render() {
    return (
     <ul className="leaderboard">
       {
         this.props.players.map((player) => {
           return (
             <Player
               key={ player._id }
               selectedPlayerId={ this.props.selectedId }
               player={ player } />
           );
         })
       }
     </ul>
    );
  }
});