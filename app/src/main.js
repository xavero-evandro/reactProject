var Page = React.createClass({
    render: function () {
        return (
            <myElement>
                < Nav title="React" linkUrl="index.html"/>
                <div className="container">
                    <Title>
                        My Component Title
                    </Title>
                    <div className="row">
                        <Form/>
                        < Button textActive="Loading...">
                            Enviar
                        </Button>
                    </div>
                </div>
            </myElement>
        );
    }
});


ReactDOM.render(
    < Page />,
    document.getElementById('page')
);