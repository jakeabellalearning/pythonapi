from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello World';

def hello_test():
    return 'Hello Test: Jake'


app.add_url_rule('/home','home',hello_test)

if __name__ == '__main__':
    app.run()


