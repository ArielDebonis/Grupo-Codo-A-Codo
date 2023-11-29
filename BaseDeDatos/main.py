import mysql.connector
from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.utils import secure_filename
import os
import time


class Comentarios():
    comentarios = []

    # CREATE
    def __init__(self, host, user, password, database):
        self.conn = mysql.connector.connect(
            host=host,
            user=user,  
            password=password
            )
        self.cursor = self.conn.cursor()
        try:
            self.cursor.execute(f'USE {database}')
        except mysql.connector.Error as err:
            if err.errno == mysql.connector.errorcode.ER_BAD_DB_ERROR:
                self.cursor.execute(f'CREATE DATABASE {database}')
                self.conn.database = database
            else:
                raise err
        self.cursor.execute('''CREATE TABLE IF NOT EXISTS comentarios (
            id INT PRIMARY KEY AUTO_INCREMENT,
            provincia VARCHAR(255) NOT NULL,
            nombre VARCHAR(255) NOT NULL,
            comentario VARCHAR(1024) NOT NULL
            )''')
        self.conn.commit()
        self.cursor.close()
        self.cursor = self.conn.cursor(dictionary=True)

    
    def agregar_comentario (self,provincia,nombre,comentario):
    
        sql = "INSERT INTO comentarios \
            (provincia,nombre,comentario) \
            VALUES \
            ( %s , %s , %s )"
        valores = (provincia,nombre,comentario)
        self.cursor.execute(sql,valores)
        self.conn.commit()
        return True
    
    
    # READ
    
    def listar_por_provincia(self,provincia):
        # Mostramos en pantalla un listado de todos los productos en la tabla
        sql = "SELECT * FROM comentarios WHERE provincia = %s "
        valores = provincia
        self.cursor.execute(sql,valores)
        comentarios = self.cursor.fetchall()
        return comentarios


    # UPDATE

    def modificar_comentario(self, id, nueva_provincia,nuevo_nombre, nuevo_comentario):
    # Modificamos los datos de un producto a partir de su código
        sql = "UPDATE productos SET \
            provincia = %s , \
            nombre = %s , \
            comentario = %s , \
            WHERE id = %s "
        valores = (nueva_provincia,nuevo_nombre,nuevo_comentario,id)
        self.cursor.execute(sql,valores)
        self.conn.commit()
        return self.cursor.rowcount > 0
    
    # DELETE

    def eliminar_producto(self,id):
        # Eliminamos un producto de la tabla a partir de su código
        sql = "DELETE FROM comentarios WHERE id = %s "
        valor = id
        self.cursor.execute(sql,valor)
        self.conn.commit()
        return self.cursor.rowcount > 0

#----------------------------------------------------------------------------------------
app = Flask(__name__)
CORS(app)

comentarios = Comentarios(host='localhost',user='root',password='root',database='saboresdb')

@app.route("/comentarios/<id>",methods = ["GET"])
def listar_por_provincia(id):
    comentarios = comentarios.listar_por_provincia(id)
    return jsonify(comentarios)

if __name__ == '__main__':
    app.run(debug=True)