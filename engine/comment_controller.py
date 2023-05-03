from flask import Flask
from haversine import haversine
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app, supports_credentials=True)

@app.route('/<nameUser>', methods=['GET'])
def get_comments(nameUser):
    result = get_mock(nameUser)
    response = {
        "result": result
    }
    return json.dumps(response)

def get_mock(nameUser):
    file = open('./mock/mock.json')
    data = json.load(file)
    mock_filtered = list(filter(lambda x: x["nameUser"] == nameUser, data['comments']))
    return mock_filtered

@app.route('/distance/cep1/<cep1>/cep2/<cep2>', methods=['GET'])
def get_kilometers_distance(cep1, cep2):
    lyon = (45.7597, 4.8422) # (lat, lon)
    paris = (48.8567, 2.3508)

    distance = haversine(lyon, paris)
    return str(distance)

if __name__ == "__main__":
    app.run(debug=True)
