from flask import Flask, request, jsonify
import numpy as np
import cv2
from PIL import Image

app = Flask(__name__)
# filename = "uploads\\test.jpg"
@app.route('/', methods=['POST'])
def upload_file():
    if 'image' not in request.files:
        return jsonify({'error': 'No file part'})

    file = request.files['image']

    if file.filename == '':
        return jsonify({'error': 'No selected file'})

    if file:
        # Ensure a secure filename to prevent directory traversal
        img = Image.open(file)
        img = cv2.cvtColor(np.array(img), cv2.COLOR_RGB2BGR)
        # cv2.imwrite(filename,img)
        print(img)


        return jsonify({'message': 'File uploaded successfully'})

if __name__ == '__main__':
    app.run(debug=True)
