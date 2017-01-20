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
    getInitialState: function () {
        return {
            name: '',
            email: '',
            subject: 'j',
            messenger: ''
        };
    },
    handleNameChange: function (e) {
        this.setState({name: e.target.value});
    },
    handleEmailChange: function (e) {
        this.setState({email: e.target.value});
    },
    handleSubjectChange: function (e) {
        this.setState({subject: e.target.value});
    },
    handleMessengerChange: function (e) {
        this.setState({messenger: e.target.value});
    },
    handleSubmit: function (e) {
        e.preventDefault();
        var name = this.state.name.trim();
        var email = this.state.email.trim();
        var subject = this.state.subject;
        var messenger = this.state.messenger.trim();
        if (!name || !email || !subject || !messenger) {
            return false;
        }
        this.props.onContactSubmit(
            {
                id: this.props.idNumber,
                name: name,
                email: email,
                subject: subject,
                messenger: messenger
            }
        );
    },

    render: function () {
        var InputStyle = {
            padding: "20px",
            fontSize: "16px",
            color: "#A7A5A5"
        };
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" onChange={this.handleNameChange}
                           placeholder="Name" style={InputStyle}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" className="form-control" id="email" onChange={this.handleEmailChange}
                           placeholder="E-mail" style={InputStyle}/>
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select defaultValue={this.state.subject} onChange={this.handleSubjectChange}
                            className="form-control" id="subject">
                        <option value="a">AngularJS</option>
                        <option value="j">Jquery</option>
                        <option value="r">ReactJs</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="messenger">Message</label>
                    <textarea className="form-control" id="messenger" onChange={this.handleMessengerChange} rows="3"
                              style={InputStyle}> </textarea>
                </div>
                < Button textActive="Loading...">
                    Enviar
                </Button>
            </form>
        );
    }
});

var Contact = React.createClass({
    render: function () {
        return (
            <tr>
                <th scope="row">{this.props.idNumber}</th>
                <td>{this.props.name}</td>
                <td>{this.props.email}</td>
                <td>{this.props.subject}</td>
                <td>{this.props.children}</td>
            </tr>
        );
    }
});


var List = React.createClass({
    render: function () {
        var contactsNodes = this.props.data.map(function (contact) {
            return (
                <Contact idNumber={contact.id} name={contact.name} email={contact.email} subject={contact.subject}>
                    {contact.messenger}
                </Contact>
            );
        });
        return (
            <table className="table">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Subject</th>
                    <th>Messenger</th>
                </tr>
                </thead>
                <tbody>
                {contactsNodes}
                </tbody>

            </table>
        );
    }
});







