from flask import Flask, send_from_directory

app = Flask(__name__)

@app.route('/')
def index():
    return send_from_directory('.', 'templates/index.html')

@app.route('/script.js')
def script():
    return send_from_directory('.', 'static/script.js')

if __name__ == '__main__':
    app.run(debug=True)
