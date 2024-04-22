import pandas as pd

df = pd.read_csv("change_id.csv")
print(df)


with open("countries.txt", "r") as file:
    filedata = file.read()


for i, row in df.iterrows():
    filedata = filedata.replace(
        'id="{}"'.format(str(row[1])), 'id="{}"'.format(str(row[2]))
    )

with open("try.txt", "w") as file:
    file.write(filedata)
