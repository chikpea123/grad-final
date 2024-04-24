import pandas as pd

df = pd.read_csv("../big_mac_index.csv")
u_countries = df.iso_a3.unique()

for country in u_countries:
    country_vals = df.loc[df["iso_a3"] == country]

    vals = country_vals[["date", "dollar_price"]]
    vals = vals.rename(columns={"dollar_price": "val"})
    vals.to_csv("../BigMacIndex/{}.csv".format(country), index=False)

