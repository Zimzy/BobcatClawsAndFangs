import mysql.connector

# Database configuration
db_config = {
    "host": "localhost",
    "user": 'DB user',
    "password": 'DB passwd',
    "database": 'DB name'
}
# Connect to the MySQL database
connection = mysql.connector.connect(**db_config)
cursor = connection.cursor()

# Query to fetch all names from the name column of your table
query = "SELECT Name FROM Product"
cursor.execute(query)

# Fetch all the results
names = cursor.fetchall()

# Write names to a txt file
with open("../api_scripts/productNames.txt", "w") as f:
    for name in names:
        f.write(name[0] + "\n")

# Close the database connection
cursor.close()
connection.close()

print("Names have been written to productNames.txt!")

