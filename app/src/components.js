var Nav = React.createClass({
    render: function () {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <a href={ this.props.linkUrl } className="navbar-brand">
                            { this.props.title }
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
});

var Title = React.createClass({

    render: function () {
        var TitleStyle = {
            color: "#777676",
            fontSize: "35px"
        };
        return (
            <div className="row">
                <h1 style={TitleStyle}>{ this.props.children }</h1>
            </div>
        );
    }
});

var Button = React.createClass({

    getInitialState: function () {
        return {
            click: false
        };
    },

    toogleClick: function () {
        this.setState({
            click: !this.state.click
        });
    },

    render: function () {
        var btnClass = this.state.click ? 'btn btn-warning' : 'btn btn-success';
        var title = this.state.click ? this.props.textActive : this.props.children;
        return (
            <button onClick={ this.toogleClick } className={btnClass}>{title}</button>
        );
    }
});


var Form = React.createClass({
    render: function () {
        var InputStyle = {
            padding: "20px",
            fontSize: "16px",
            color: "#A7A5A5"
        };
        return (
            <form >
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Name" style={InputStyle}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" className="form-control" id="email" placeholder="E-mail" style={InputStyle}/>
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select defaultValue="r" className="form-control" id="subject">
                        <option value="a">AngularJS</option>
                        <option value="j">Jquery</option>
                        <option value="r">ReactJs</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="messenger">Message</label>
                    <textarea className="form-control" id="messenger" rows="3" style={InputStyle}> </textarea>
                </div>
            </form>
        );
    }
});