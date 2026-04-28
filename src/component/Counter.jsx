import React from "react";

class Counter extends React.Component {
    state = { Count: 0 }

    onIncrement = () => {
        this.setState({ Count: this.state.Count + 1 });
    }

    onDecrement = () => {
        this.setState({ Count: this.state.Count - 1 });
    }

    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>Count</h1>
                <h1>{this.state.Count}</h1>

                <div style={{ justifyContent: 'center', display: "flex", gap: "10px" }}>
                    <button
                        className="btn btn-success"
                        onClick={this.onIncrement}
                    >
                        Increment
                    </button>

                    <button
                        className="btn btn-danger"
                        onClick={this.onDecrement}
                    >
                        Decrement
                    </button>
                </div>
            </div>
        )
    }
}

export default Counter;