import { Component } from "react";
import ErrorMessenge from "../ErrorMessenge/ErrorMessenge";

class ErrorBoundary extends Component {
    state = {
        error: false,
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
        this.setState({ error: true });
    }

    render() {
        if (this.state.error) {
            return (
                <ErrorMessenge />
            )
        }
        return (
            this.props.children
        )
    }
}


export default ErrorBoundary;