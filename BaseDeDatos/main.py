import mysql.connector
import flask
import flask_cors
import werkzeug
import os
import time


class Comentarios():
    comentarios = []

    # CREATE
    def __init__(self, host, user, password, database):
        self.conn = mysql.connector.connect(
            host=host,
            user=user,  
            password=password,
            database=database
            )
        self.cursor = self.conn.cursor()
        try:
            self.cursor.execute(f'USE {database}')
        except:
            if mysql.connector.Error.errno == mysql.connector.errorcode.ER_BAD_DB_ERROR:
                self.cursor.execute(f'CREATE DATABASE {database}')
                self.conn.database = database
            else:
                raise mysql.connector.Error
        self.cursor.execute('''CREATE TABLE IF NOT EXISTS comentarios (
            id INT AUTO_INCREMENT,
            provincia VARCHAR(255) NOT NULL,
            nombre VARCHAR(255) NOT NULL,
            comentario VARCHAR(1024) NOT NULL
            )''')
        self.conn.commit()
        self.cursor.close()
        self.cursor = self.conn.cursor(dictionary=True)

    
    def agregar_comentario (self,provincia,nombre,comentario):
    
        sql = f"INSERT INTO comentarios \
            (provincia,nombre,comentario) \
            VALUES \
            ('{provincia}','{nombre}','{comentario}')"
        self.cursor.execute(sql)
        self.conn.commit()
        return True
    
    
    # READ
    
    def listar_por_provincia(self,provincia):
        # Mostramos en pantalla un listado de todos los productos en la tabla
        self.cursor.execute(f"SELECT * FROM comentarios WHERE provincia = {provincia}")
        comentarios = self.cursor.fetchall()
        return comentarios


    # UPDATE

    def modificar_comentario(self, id, nueva_provincia,nuevo_nombre, nuevo_comentario):
    # Modificamos los datos de un producto a partir de su código
        sql = f"UPDATE productos SET \
            provincia = '{nueva_provincia}', \
            nombre = {nuevo_nombre}, \
            comentario = {nuevo_comentario}, \
            WHERE id = {id}"
        self.cursor.execute(sql)
        self.conn.commit()
        return self.cursor.rowcount > 0
    
    # DELETE

    def eliminar_producto(self,id):
        # Eliminamos un producto de la tabla a partir de su código
        self.cursor.execute(f"DELETE FROM comentarios WHERE id = {id}")
        self.conn.commit()
        return self.cursor.rowcount > 0
