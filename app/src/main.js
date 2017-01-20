var Page = React.createClass({
        getInitialState: function () {
            return {
                data: [
                    {
                        id: 1,
                        name: "Maria",
                        email: "maria@maria.com",
                        subject: "r",
                        messenger: "My Messenger text"
                    },
                    {
                        id: 2,
                        name: "Pedro",
                        email: "pedro@pedro.com",
                        subject: "a",
                        messenger: "My Messenger text 2"
                    }
                ]
            }
        },
        handleContactSubmit: function (contact) {
            var newContacts = this.state.data.concat([contact]);
            this.setState({data: newContacts});
        },
        render: function () {
            return (
                <myElement>
                    < Nav title="React" linkUrl="index.html"/>
                    <div className="container">
                        <Title>
                            My Component Title
                        </Title>
                        <div className="row">
                            <Form onContactSubmit={this.handleContactSubmit}
                                  idNumber={this.state.data.length + 1}/>
                        </div>
                        <br/><br/>
                        <div className="row">
                            <List data={this.state.data}/>
                        </div>

                    </div>
                </myElement>
            );
        }
    })
    ;


ReactDOM.render(
    < Page />,
    document.getElementById('page')
);