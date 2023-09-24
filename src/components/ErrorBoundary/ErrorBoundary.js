import ErrorMessenge from "../ErrorMessenge/ErrorMessenge";
import { Component } from "react";

class ErrorBoundary extends Component {
    state = {
        error: false,
    };

    componentDidCatch(error, errorInfo) {
        this.setState({ error: true });
    }

    render() {
        if (this.state.error) {
            return <ErrorMessenge />;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
