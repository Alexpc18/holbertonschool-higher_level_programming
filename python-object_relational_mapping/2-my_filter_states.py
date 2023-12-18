#!/usr/bin/python3
"""
This script makes us connect with Mysql.i
"""

import MySQLdb
from sys import argv


def search_state_by_name():
    """
    This function connects to MySQL server retrieves and displays
    all values in state table where name matches
    with the argument provided.
    """

    mysql_user = argv[1]
    mysql_pass = argv[2]
    mysql_db = argv[3]
    host_mysql = 'localhost'
    port_mysql = 3306
    state_name = argv[4]

    database = MySQLdb.connect(
        host=host_mysql,
        port=port_mysql,
        user=mysql_user,
        password=mysql_pass,
        database=mysql_db
    )

    cursor = database.cursor()
    query = "SELECT * FROM states WHERE BINARY\
            name = '{}' ORDER BY id ASC".format(state_name)
    cursor.execute(query)
    rows = cursor.fetchall()

    for row in rows:
        print(row)

    cursor.close()
    database.close()


if __name__ == "__main__":
    """
    This validation prevents it from being executed this file
    """
    search_state_by_name()
