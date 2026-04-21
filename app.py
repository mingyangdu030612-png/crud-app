from flask import Flask, render_template, request, redirect

app = Flask(__name__)

items = []

@app.route('/')
def index():
    return render_template('index.html', items=items)

@app.route('/add', methods=['POST'])
def add():
    name = request.form['name']
    description = request.form['description']
    items.append({'name': name, 'description': description})
    return redirect('/')

@app.route('/delete/<int:index>')
def delete(index):
    if 0 <= index < len(items):
        items.pop(index)
    return redirect('/')

@app.route('/edit/<int:index>', methods=['POST'])
def edit(index):
    if 0 <= index < len(items):
        items[index]['name'] = request.form['name']
        items[index]['description'] = request.form['description']
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)