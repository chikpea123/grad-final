import pandas as pd

df = pd.read_csv("../Unemployment.csv")
ignore = ["Country Name", "Country Code", "Indicator Name", "Indicator Code"]
for index, row in df.iterrows():
    country_code = row[1]

    with open("../Unemployment/" + country_code + ".csv", "w") as file:
        file.write("date,val\n")
        for name, val in row.items():
            if name not in ignore:
                file.write(str(name) + "," + str(val) + "\n")
