// Data yang digenerate otomatis dari car_clean.csv
const carData = [
  {
    "Brand": "Ford",
    "Model_Year": 2023,
    "Price": 34309.25,
    "Mileage": 180635,
    "Engine_Size": 1.2,
    "Horsepower": 82
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2018,
    "Price": 55153.6,
    "Mileage": 35628,
    "Engine_Size": 3.2,
    "Horsepower": 259
  },
  {
    "Brand": "BMW",
    "Model_Year": 2008,
    "Price": 41894.4,
    "Mileage": 74672,
    "Engine_Size": 2.2,
    "Horsepower": 333
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2017,
    "Price": 54046.7,
    "Mileage": 51246,
    "Engine_Size": 2.2,
    "Horsepower": 381
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2012,
    "Price": 38010.35,
    "Mileage": 147233,
    "Engine_Size": 2.4,
    "Horsepower": 290
  },
  {
    "Brand": "Honda",
    "Model_Year": 2023,
    "Price": 54182.5,
    "Mileage": 94110,
    "Engine_Size": 3.5,
    "Horsepower": 173
  },
  {
    "Brand": "BMW",
    "Model_Year": 2016,
    "Price": 52140.5,
    "Mileage": 7810,
    "Engine_Size": 2.3,
    "Horsepower": 267
  },
  {
    "Brand": "BMW",
    "Model_Year": 2022,
    "Price": 61707.4,
    "Mileage": 195932,
    "Engine_Size": 3.9,
    "Horsepower": 369
  },
  {
    "Brand": "BMW",
    "Model_Year": 2010,
    "Price": 44992.6,
    "Mileage": 76688,
    "Engine_Size": 2.6,
    "Horsepower": 238
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2022,
    "Price": 40924.6,
    "Mileage": 70548,
    "Engine_Size": 1.3,
    "Horsepower": 218
  },
  {
    "Brand": "Ford",
    "Model_Year": 2023,
    "Price": 56053.25,
    "Mileage": 198435,
    "Engine_Size": 4.1,
    "Horsepower": 318
  },
  {
    "Brand": "BMW",
    "Model_Year": 2009,
    "Price": 49052.9,
    "Mileage": 16162,
    "Engine_Size": 2.1,
    "Horsepower": 325
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2013,
    "Price": 34220.1,
    "Mileage": 92858,
    "Engine_Size": 2.7,
    "Horsepower": 111
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2007,
    "Price": 46273.25,
    "Mileage": 78535,
    "Engine_Size": 3.7,
    "Horsepower": 271
  },
  {
    "Brand": "Honda",
    "Model_Year": 2014,
    "Price": 46711.45,
    "Mileage": 143291,
    "Engine_Size": 2.3,
    "Horsepower": 313
  },
  {
    "Brand": "Ford",
    "Model_Year": 2023,
    "Price": 46896.8,
    "Mileage": 75864,
    "Engine_Size": 1.2,
    "Horsepower": 226
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2007,
    "Price": 40811.35,
    "Mileage": 139693,
    "Engine_Size": 2.5,
    "Horsepower": 355
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2019,
    "Price": 67784.45,
    "Mileage": 123371,
    "Engine_Size": 4.8,
    "Horsepower": 351
  },
  {
    "Brand": "Honda",
    "Model_Year": 2005,
    "Price": 44801.4,
    "Mileage": 94792,
    "Engine_Size": 3.6,
    "Horsepower": 307
  },
  {
    "Brand": "Ford",
    "Model_Year": 2011,
    "Price": 32714.75,
    "Mileage": 180505,
    "Engine_Size": 3.7,
    "Horsepower": 88
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2016,
    "Price": 47823.6,
    "Mileage": 71188,
    "Engine_Size": 3.5,
    "Horsepower": 122
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2021,
    "Price": 37807.85,
    "Mileage": 191023,
    "Engine_Size": 1.8,
    "Horsepower": 154
  },
  {
    "Brand": "Ford",
    "Model_Year": 2009,
    "Price": 50356.1,
    "Mileage": 86718,
    "Engine_Size": 2.7,
    "Horsepower": 342
  },
  {
    "Brand": "Honda",
    "Model_Year": 2008,
    "Price": 48754.1,
    "Mileage": 41558,
    "Engine_Size": 4.0,
    "Horsepower": 282
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2016,
    "Price": 36202.1,
    "Mileage": 133938,
    "Engine_Size": 1.4,
    "Horsepower": 173
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2022,
    "Price": 43698.45,
    "Mileage": 151731,
    "Engine_Size": 2.1,
    "Horsepower": 261
  },
  {
    "Brand": "Ford",
    "Model_Year": 2021,
    "Price": 54538.35,
    "Mileage": 39413,
    "Engine_Size": 2.1,
    "Horsepower": 246
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2023,
    "Price": 55129.25,
    "Mileage": 15435,
    "Engine_Size": 2.7,
    "Horsepower": 216
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2013,
    "Price": 47514.85,
    "Mileage": 189983,
    "Engine_Size": 4.9,
    "Horsepower": 150
  },
  {
    "Brand": "BMW",
    "Model_Year": 2008,
    "Price": 35287.65,
    "Mileage": 33067,
    "Engine_Size": 1.3,
    "Horsepower": 262
  },
  {
    "Brand": "BMW",
    "Model_Year": 2006,
    "Price": 33525.3,
    "Mileage": 92794,
    "Engine_Size": 3.1,
    "Horsepower": 106
  },
  {
    "Brand": "Honda",
    "Model_Year": 2008,
    "Price": 42929.85,
    "Mileage": 98823,
    "Engine_Size": 1.7,
    "Horsepower": 395
  },
  {
    "Brand": "Ford",
    "Model_Year": 2006,
    "Price": 47126.8,
    "Mileage": 74224,
    "Engine_Size": 4.9,
    "Horsepower": 223
  },
  {
    "Brand": "Ford",
    "Model_Year": 2019,
    "Price": 44889.05,
    "Mileage": 6379,
    "Engine_Size": 1.5,
    "Horsepower": 199
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2006,
    "Price": 35642.65,
    "Mileage": 107547,
    "Engine_Size": 2.6,
    "Horsepower": 128
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2008,
    "Price": 49493.95,
    "Mileage": 113541,
    "Engine_Size": 4.0,
    "Horsepower": 293
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2010,
    "Price": 47743.2,
    "Mileage": 163696,
    "Engine_Size": 3.8,
    "Horsepower": 318
  },
  {
    "Brand": "BMW",
    "Model_Year": 2011,
    "Price": 44302.3,
    "Mileage": 119634,
    "Engine_Size": 2.7,
    "Horsepower": 309
  },
  {
    "Brand": "Ford",
    "Model_Year": 2014,
    "Price": 46695.95,
    "Mileage": 133701,
    "Engine_Size": 2.4,
    "Horsepower": 362
  },
  {
    "Brand": "Ford",
    "Model_Year": 2023,
    "Price": 63718.75,
    "Mileage": 62745,
    "Engine_Size": 2.6,
    "Horsepower": 356
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2023,
    "Price": 45931.15,
    "Mileage": 187877,
    "Engine_Size": 2.1,
    "Horsepower": 273
  },
  {
    "Brand": "BMW",
    "Model_Year": 2016,
    "Price": 39792.25,
    "Mileage": 108915,
    "Engine_Size": 1.8,
    "Horsepower": 168
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2007,
    "Price": 39293.6,
    "Mileage": 148588,
    "Engine_Size": 2.9,
    "Horsepower": 245
  },
  {
    "Brand": "BMW",
    "Model_Year": 2017,
    "Price": 46809.0,
    "Mileage": 134560,
    "Engine_Size": 2.1,
    "Horsepower": 331
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2022,
    "Price": 50932.25,
    "Mileage": 160915,
    "Engine_Size": 2.1,
    "Horsepower": 340
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2012,
    "Price": 42371.8,
    "Mileage": 141984,
    "Engine_Size": 3.6,
    "Horsepower": 212
  },
  {
    "Brand": "Honda",
    "Model_Year": 2019,
    "Price": 56327.7,
    "Mileage": 157586,
    "Engine_Size": 4.9,
    "Horsepower": 258
  },
  {
    "Brand": "Ford",
    "Model_Year": 2005,
    "Price": 43533.8,
    "Mileage": 193104,
    "Engine_Size": 3.4,
    "Horsepower": 341
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2007,
    "Price": 18911.55,
    "Mileage": 164869,
    "Engine_Size": 1.3,
    "Horsepower": 89
  },
  {
    "Brand": "Ford",
    "Model_Year": 2012,
    "Price": 43158.95,
    "Mileage": 142521,
    "Engine_Size": 1.3,
    "Horsepower": 369
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2008,
    "Price": 42674.15,
    "Mileage": 137797,
    "Engine_Size": 4.8,
    "Horsepower": 115
  },
  {
    "Brand": "Honda",
    "Model_Year": 2020,
    "Price": 44544.7,
    "Mileage": 86406,
    "Engine_Size": 2.2,
    "Horsepower": 164
  },
  {
    "Brand": "Honda",
    "Model_Year": 2014,
    "Price": 39019.8,
    "Mileage": 14304,
    "Engine_Size": 1.4,
    "Horsepower": 133
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2016,
    "Price": 49124.25,
    "Mileage": 130555,
    "Engine_Size": 3.4,
    "Horsepower": 200
  },
  {
    "Brand": "Honda",
    "Model_Year": 2018,
    "Price": 42775.25,
    "Mileage": 149735,
    "Engine_Size": 3.5,
    "Horsepower": 78
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2018,
    "Price": 55378.0,
    "Mileage": 75320,
    "Engine_Size": 3.6,
    "Horsepower": 272
  },
  {
    "Brand": "Honda",
    "Model_Year": 2006,
    "Price": 44945.6,
    "Mileage": 99488,
    "Engine_Size": 2.1,
    "Horsepower": 367
  },
  {
    "Brand": "Ford",
    "Model_Year": 2009,
    "Price": 33585.45,
    "Mileage": 80591,
    "Engine_Size": 1.1,
    "Horsepower": 243
  },
  {
    "Brand": "Ford",
    "Model_Year": 2009,
    "Price": 45173.8,
    "Mileage": 100044,
    "Engine_Size": 4.9,
    "Horsepower": 142
  },
  {
    "Brand": "Ford",
    "Model_Year": 2010,
    "Price": 31674.6,
    "Mileage": 148748,
    "Engine_Size": 2.0,
    "Horsepower": 153
  },
  {
    "Brand": "Ford",
    "Model_Year": 2017,
    "Price": 46337.4,
    "Mileage": 30192,
    "Engine_Size": 3.7,
    "Horsepower": 128
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2013,
    "Price": 36860.3,
    "Mileage": 160794,
    "Engine_Size": 3.8,
    "Horsepower": 90
  },
  {
    "Brand": "BMW",
    "Model_Year": 2019,
    "Price": 48386.1,
    "Mileage": 143518,
    "Engine_Size": 3.4,
    "Horsepower": 226
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2018,
    "Price": 50867.8,
    "Mileage": 124304,
    "Engine_Size": 2.3,
    "Horsepower": 388
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2011,
    "Price": 46974.15,
    "Mileage": 140797,
    "Engine_Size": 2.1,
    "Horsepower": 398
  },
  {
    "Brand": "Ford",
    "Model_Year": 2006,
    "Price": 35864.65,
    "Mileage": 93207,
    "Engine_Size": 3.4,
    "Horsepower": 130
  },
  {
    "Brand": "Honda",
    "Model_Year": 2011,
    "Price": 41306.8,
    "Mileage": 193704,
    "Engine_Size": 4.5,
    "Horsepower": 133
  },
  {
    "Brand": "Ford",
    "Model_Year": 2010,
    "Price": 58606.95,
    "Mileage": 78741,
    "Engine_Size": 4.8,
    "Horsepower": 394
  },
  {
    "Brand": "Honda",
    "Model_Year": 2021,
    "Price": 46261.75,
    "Mileage": 21365,
    "Engine_Size": 1.4,
    "Horsepower": 237
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2006,
    "Price": 36979.4,
    "Mileage": 70792,
    "Engine_Size": 1.6,
    "Horsepower": 272
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2007,
    "Price": 43145.2,
    "Mileage": 151776,
    "Engine_Size": 4.8,
    "Horsepower": 198
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2009,
    "Price": 51605.25,
    "Mileage": 55575,
    "Engine_Size": 3.9,
    "Horsepower": 314
  },
  {
    "Brand": "Honda",
    "Model_Year": 2009,
    "Price": 45407.3,
    "Mileage": 165974,
    "Engine_Size": 4.5,
    "Horsepower": 175
  },
  {
    "Brand": "Ford",
    "Model_Year": 2005,
    "Price": 36545.95,
    "Mileage": 124641,
    "Engine_Size": 1.8,
    "Horsepower": 390
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2012,
    "Price": 41880.65,
    "Mileage": 137267,
    "Engine_Size": 3.4,
    "Horsepower": 191
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2016,
    "Price": 60775.15,
    "Mileage": 58517,
    "Engine_Size": 3.8,
    "Horsepower": 387
  },
  {
    "Brand": "Honda",
    "Model_Year": 2008,
    "Price": 46451.4,
    "Mileage": 39012,
    "Engine_Size": 3.7,
    "Horsepower": 251
  },
  {
    "Brand": "Honda",
    "Model_Year": 2017,
    "Price": 41520.65,
    "Mileage": 147487,
    "Engine_Size": 2.6,
    "Horsepower": 172
  },
  {
    "Brand": "Ford",
    "Model_Year": 2019,
    "Price": 41123.7,
    "Mileage": 175606,
    "Engine_Size": 1.1,
    "Horsepower": 385
  },
  {
    "Brand": "Honda",
    "Model_Year": 2015,
    "Price": 59006.7,
    "Mileage": 26686,
    "Engine_Size": 3.3,
    "Horsepower": 371
  },
  {
    "Brand": "Honda",
    "Model_Year": 2014,
    "Price": 38815.25,
    "Mileage": 164815,
    "Engine_Size": 2.0,
    "Horsepower": 330
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2007,
    "Price": 42436.95,
    "Mileage": 37161,
    "Engine_Size": 2.8,
    "Horsepower": 182
  },
  {
    "Brand": "Ford",
    "Model_Year": 2018,
    "Price": 48448.75,
    "Mileage": 197385,
    "Engine_Size": 4.8,
    "Horsepower": 139
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2020,
    "Price": 49320.9,
    "Mileage": 7402,
    "Engine_Size": 2.6,
    "Horsepower": 229
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2014,
    "Price": 60686.5,
    "Mileage": 68190,
    "Engine_Size": 4.4,
    "Horsepower": 309
  },
  {
    "Brand": "Ford",
    "Model_Year": 2014,
    "Price": 30002.85,
    "Mileage": 188623,
    "Engine_Size": 1.8,
    "Horsepower": 80
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2016,
    "Price": 51880.25,
    "Mileage": 18275,
    "Engine_Size": 3.7,
    "Horsepower": 207
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2013,
    "Price": 50633.3,
    "Mileage": 164254,
    "Engine_Size": 4.9,
    "Horsepower": 236
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2005,
    "Price": 42980.25,
    "Mileage": 19915,
    "Engine_Size": 1.4,
    "Horsepower": 316
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2009,
    "Price": 31065.550000000003,
    "Mileage": 5909,
    "Engine_Size": 1.0,
    "Horsepower": 100
  },
  {
    "Brand": "Honda",
    "Model_Year": 2012,
    "Price": 32736.5,
    "Mileage": 119110,
    "Engine_Size": 2.7,
    "Horsepower": 81
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2015,
    "Price": 40745.6,
    "Mileage": 70908,
    "Engine_Size": 1.4,
    "Horsepower": 312
  },
  {
    "Brand": "Honda",
    "Model_Year": 2016,
    "Price": 48058.15,
    "Mileage": 132337,
    "Engine_Size": 4.0,
    "Horsepower": 177
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2005,
    "Price": 58769.0,
    "Mileage": 27620,
    "Engine_Size": 4.7,
    "Horsepower": 392
  },
  {
    "Brand": "Ford",
    "Model_Year": 2015,
    "Price": 52699.4,
    "Mileage": 39112,
    "Engine_Size": 2.7,
    "Horsepower": 263
  },
  {
    "Brand": "Ford",
    "Model_Year": 2009,
    "Price": 49037.45,
    "Mileage": 7431,
    "Engine_Size": 2.0,
    "Horsepower": 377
  },
  {
    "Brand": "Ford",
    "Model_Year": 2019,
    "Price": 48477.5,
    "Mileage": 91590,
    "Engine_Size": 2.7,
    "Horsepower": 202
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2009,
    "Price": 55577.25,
    "Mileage": 67175,
    "Engine_Size": 3.9,
    "Horsepower": 350
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2016,
    "Price": 44627.4,
    "Mileage": 122472,
    "Engine_Size": 1.0,
    "Horsepower": 360
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2009,
    "Price": 46647.8,
    "Mileage": 37624,
    "Engine_Size": 3.4,
    "Horsepower": 232
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2021,
    "Price": 64835.8,
    "Mileage": 66264,
    "Engine_Size": 3.5,
    "Horsepower": 347
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2021,
    "Price": 57016.7,
    "Mileage": 118766,
    "Engine_Size": 3.6,
    "Horsepower": 272
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2016,
    "Price": 32798.5,
    "Mileage": 168030,
    "Engine_Size": 2.0,
    "Horsepower": 165
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2019,
    "Price": 56146.65,
    "Mileage": 137767,
    "Engine_Size": 3.9,
    "Horsepower": 292
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2019,
    "Price": 42277.45,
    "Mileage": 105211,
    "Engine_Size": 1.4,
    "Horsepower": 306
  },
  {
    "Brand": "Ford",
    "Model_Year": 2010,
    "Price": 33986.9,
    "Mileage": 124502,
    "Engine_Size": 1.8,
    "Horsepower": 186
  },
  {
    "Brand": "BMW",
    "Model_Year": 2016,
    "Price": 52889.8,
    "Mileage": 186004,
    "Engine_Size": 4.5,
    "Horsepower": 261
  },
  {
    "Brand": "BMW",
    "Model_Year": 2022,
    "Price": 66928.75,
    "Mileage": 49225,
    "Engine_Size": 4.0,
    "Horsepower": 345
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2018,
    "Price": 38190.25,
    "Mileage": 137475,
    "Engine_Size": 1.1,
    "Horsepower": 175
  },
  {
    "Brand": "BMW",
    "Model_Year": 2006,
    "Price": 21956.6,
    "Mileage": 174708,
    "Engine_Size": 2.0,
    "Horsepower": 73
  },
  {
    "Brand": "BMW",
    "Model_Year": 2013,
    "Price": 33230.05,
    "Mileage": 15839,
    "Engine_Size": 1.9,
    "Horsepower": 87
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2009,
    "Price": 40220.95,
    "Mileage": 183901,
    "Engine_Size": 2.1,
    "Horsepower": 376
  },
  {
    "Brand": "BMW",
    "Model_Year": 2005,
    "Price": 23596.9,
    "Mileage": 145302,
    "Engine_Size": 2.0,
    "Horsepower": 89
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2007,
    "Price": 33300.15,
    "Mileage": 56977,
    "Engine_Size": 1.3,
    "Horsepower": 191
  },
  {
    "Brand": "Honda",
    "Model_Year": 2010,
    "Price": 35924.8,
    "Mileage": 176304,
    "Engine_Size": 2.8,
    "Horsepower": 206
  },
  {
    "Brand": "Honda",
    "Model_Year": 2009,
    "Price": 45286.5,
    "Mileage": 118050,
    "Engine_Size": 3.9,
    "Horsepower": 149
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2009,
    "Price": 49362.45,
    "Mileage": 30651,
    "Engine_Size": 3.4,
    "Horsepower": 223
  },
  {
    "Brand": "Ford",
    "Model_Year": 2005,
    "Price": 33267.05,
    "Mileage": 102919,
    "Engine_Size": 3.7,
    "Horsepower": 94
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2021,
    "Price": 45882.85,
    "Mileage": 44963,
    "Engine_Size": 1.3,
    "Horsepower": 238
  },
  {
    "Brand": "Ford",
    "Model_Year": 2023,
    "Price": 48620.8,
    "Mileage": 191944,
    "Engine_Size": 4.8,
    "Horsepower": 128
  },
  {
    "Brand": "Honda",
    "Model_Year": 2018,
    "Price": 64542.2,
    "Mileage": 122776,
    "Engine_Size": 4.4,
    "Horsepower": 370
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2016,
    "Price": 51050.1,
    "Mileage": 84198,
    "Engine_Size": 4.2,
    "Horsepower": 110
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2014,
    "Price": 43347.45,
    "Mileage": 149811,
    "Engine_Size": 4.3,
    "Horsepower": 107
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2022,
    "Price": 56486.15,
    "Mileage": 135697,
    "Engine_Size": 4.7,
    "Horsepower": 186
  },
  {
    "Brand": "BMW",
    "Model_Year": 2015,
    "Price": 55375.3,
    "Mileage": 68294,
    "Engine_Size": 3.2,
    "Horsepower": 344
  },
  {
    "Brand": "Ford",
    "Model_Year": 2006,
    "Price": 35686.6,
    "Mileage": 184428,
    "Engine_Size": 1.8,
    "Horsepower": 339
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2022,
    "Price": 57585.55,
    "Mileage": 6789,
    "Engine_Size": 3.5,
    "Horsepower": 196
  },
  {
    "Brand": "BMW",
    "Model_Year": 2011,
    "Price": 38071.4,
    "Mileage": 155492,
    "Engine_Size": 4.0,
    "Horsepower": 72
  },
  {
    "Brand": "BMW",
    "Model_Year": 2019,
    "Price": 65408.15,
    "Mileage": 94297,
    "Engine_Size": 4.0,
    "Horsepower": 362
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2015,
    "Price": 32626.1,
    "Mileage": 173678,
    "Engine_Size": 3.1,
    "Horsepower": 85
  },
  {
    "Brand": "BMW",
    "Model_Year": 2022,
    "Price": 46715.4,
    "Mileage": 174712,
    "Engine_Size": 1.3,
    "Horsepower": 334
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2016,
    "Price": 50780.95,
    "Mileage": 123341,
    "Engine_Size": 2.5,
    "Horsepower": 308
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2010,
    "Price": 59547.25,
    "Mileage": 49135,
    "Engine_Size": 4.7,
    "Horsepower": 332
  },
  {
    "Brand": "BMW",
    "Model_Year": 2017,
    "Price": 48685.65,
    "Mileage": 42067,
    "Engine_Size": 3.3,
    "Horsepower": 203
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2020,
    "Price": 51130.4,
    "Mileage": 194492,
    "Engine_Size": 3.2,
    "Horsepower": 282
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2022,
    "Price": 48141.15,
    "Mileage": 22357,
    "Engine_Size": 2.1,
    "Horsepower": 84
  },
  {
    "Brand": "Honda",
    "Model_Year": 2014,
    "Price": 49889.85,
    "Mileage": 175923,
    "Engine_Size": 2.5,
    "Horsepower": 397
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2012,
    "Price": 52625.9,
    "Mileage": 43262,
    "Engine_Size": 4.6,
    "Horsepower": 198
  },
  {
    "Brand": "BMW",
    "Model_Year": 2022,
    "Price": 56077.85,
    "Mileage": 63643,
    "Engine_Size": 3.7,
    "Horsepower": 191
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2005,
    "Price": 47665.7,
    "Mileage": 157606,
    "Engine_Size": 4.1,
    "Horsepower": 310
  },
  {
    "Brand": "Honda",
    "Model_Year": 2012,
    "Price": 44898.5,
    "Mileage": 96270,
    "Engine_Size": 2.8,
    "Horsepower": 184
  },
  {
    "Brand": "Honda",
    "Model_Year": 2010,
    "Price": 41296.8,
    "Mileage": 168944,
    "Engine_Size": 3.5,
    "Horsepower": 266
  },
  {
    "Brand": "Ford",
    "Model_Year": 2009,
    "Price": 36706.95,
    "Mileage": 143761,
    "Engine_Size": 2.0,
    "Horsepower": 291
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2019,
    "Price": 58402.85,
    "Mileage": 74103,
    "Engine_Size": 3.8,
    "Horsepower": 283
  },
  {
    "Brand": "BMW",
    "Model_Year": 2019,
    "Price": 47897.6,
    "Mileage": 91268,
    "Engine_Size": 2.7,
    "Horsepower": 149
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2006,
    "Price": 43094.5,
    "Mileage": 91310,
    "Engine_Size": 2.8,
    "Horsepower": 332
  },
  {
    "Brand": "Ford",
    "Model_Year": 2005,
    "Price": 43186.4,
    "Mileage": 42412,
    "Engine_Size": 3.6,
    "Horsepower": 204
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2015,
    "Price": 63508.3,
    "Mileage": 52734,
    "Engine_Size": 4.7,
    "Horsepower": 375
  },
  {
    "Brand": "Ford",
    "Model_Year": 2014,
    "Price": 40110.35,
    "Mileage": 92793,
    "Engine_Size": 1.3,
    "Horsepower": 311
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2022,
    "Price": 70167.6,
    "Mileage": 27228,
    "Engine_Size": 4.3,
    "Horsepower": 372
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2022,
    "Price": 55141.65,
    "Mileage": 125627,
    "Engine_Size": 2.2,
    "Horsepower": 339
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2021,
    "Price": 54500.8,
    "Mileage": 82924,
    "Engine_Size": 2.8,
    "Horsepower": 356
  },
  {
    "Brand": "BMW",
    "Model_Year": 2012,
    "Price": 32598.050000000003,
    "Mileage": 16319,
    "Engine_Size": 1.1,
    "Horsepower": 119
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2019,
    "Price": 49782.25,
    "Mileage": 11475,
    "Engine_Size": 2.2,
    "Horsepower": 258
  },
  {
    "Brand": "Ford",
    "Model_Year": 2012,
    "Price": 53026.0,
    "Mileage": 150800,
    "Engine_Size": 3.0,
    "Horsepower": 366
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2021,
    "Price": 39894.75,
    "Mileage": 34545,
    "Engine_Size": 1.2,
    "Horsepower": 83
  },
  {
    "Brand": "BMW",
    "Model_Year": 2016,
    "Price": 49521.2,
    "Mileage": 101636,
    "Engine_Size": 3.0,
    "Horsepower": 301
  },
  {
    "Brand": "BMW",
    "Model_Year": 2012,
    "Price": 53863.6,
    "Mileage": 197828,
    "Engine_Size": 4.7,
    "Horsepower": 330
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2018,
    "Price": 39513.45,
    "Mileage": 174771,
    "Engine_Size": 1.4,
    "Horsepower": 261
  },
  {
    "Brand": "Ford",
    "Model_Year": 2008,
    "Price": 45504.35,
    "Mileage": 172893,
    "Engine_Size": 4.1,
    "Horsepower": 272
  },
  {
    "Brand": "Honda",
    "Model_Year": 2005,
    "Price": 45371.25,
    "Mileage": 35615,
    "Engine_Size": 2.6,
    "Horsepower": 330
  },
  {
    "Brand": "Honda",
    "Model_Year": 2005,
    "Price": 39564.7,
    "Mileage": 18746,
    "Engine_Size": 3.6,
    "Horsepower": 182
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2023,
    "Price": 42935.15,
    "Mileage": 158817,
    "Engine_Size": 2.0,
    "Horsepower": 105
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2020,
    "Price": 44173.75,
    "Mileage": 6245,
    "Engine_Size": 1.6,
    "Horsepower": 148
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2018,
    "Price": 47706.6,
    "Mileage": 122408,
    "Engine_Size": 1.6,
    "Horsepower": 344
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2020,
    "Price": 48402.85,
    "Mileage": 117143,
    "Engine_Size": 1.3,
    "Horsepower": 347
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2009,
    "Price": 33193.75,
    "Mileage": 160925,
    "Engine_Size": 1.7,
    "Horsepower": 231
  },
  {
    "Brand": "Ford",
    "Model_Year": 2013,
    "Price": 59961.4,
    "Mileage": 32632,
    "Engine_Size": 3.7,
    "Horsepower": 381
  },
  {
    "Brand": "Ford",
    "Model_Year": 2006,
    "Price": 41856.2,
    "Mileage": 17856,
    "Engine_Size": 4.5,
    "Horsepower": 86
  },
  {
    "Brand": "Ford",
    "Model_Year": 2022,
    "Price": 53163.75,
    "Mileage": 192965,
    "Engine_Size": 4.3,
    "Horsepower": 273
  },
  {
    "Brand": "Ford",
    "Model_Year": 2010,
    "Price": 44086.55,
    "Mileage": 73049,
    "Engine_Size": 3.7,
    "Horsepower": 86
  },
  {
    "Brand": "Ford",
    "Model_Year": 2013,
    "Price": 39943.9,
    "Mileage": 63182,
    "Engine_Size": 1.4,
    "Horsepower": 271
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2005,
    "Price": 33014.35,
    "Mileage": 138873,
    "Engine_Size": 2.2,
    "Horsepower": 279
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2013,
    "Price": 36896.95,
    "Mileage": 175821,
    "Engine_Size": 2.2,
    "Horsepower": 147
  },
  {
    "Brand": "BMW",
    "Model_Year": 2020,
    "Price": 42248.3,
    "Mileage": 60654,
    "Engine_Size": 2.0,
    "Horsepower": 125
  },
  {
    "Brand": "Honda",
    "Model_Year": 2017,
    "Price": 43852.95,
    "Mileage": 60381,
    "Engine_Size": 3.1,
    "Horsepower": 149
  },
  {
    "Brand": "Ford",
    "Model_Year": 2013,
    "Price": 55550.95,
    "Mileage": 63601,
    "Engine_Size": 3.1,
    "Horsepower": 375
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2017,
    "Price": 34143.3,
    "Mileage": 151154,
    "Engine_Size": 2.4,
    "Horsepower": 127
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2013,
    "Price": 35358.0,
    "Mileage": 150720,
    "Engine_Size": 2.4,
    "Horsepower": 87
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2015,
    "Price": 56738.8,
    "Mileage": 5364,
    "Engine_Size": 4.3,
    "Horsepower": 277
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2008,
    "Price": 41728.0,
    "Mileage": 170640,
    "Engine_Size": 4.2,
    "Horsepower": 204
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2006,
    "Price": 28828.2,
    "Mileage": 12436,
    "Engine_Size": 2.2,
    "Horsepower": 79
  },
  {
    "Brand": "BMW",
    "Model_Year": 2010,
    "Price": 44894.35,
    "Mileage": 91713,
    "Engine_Size": 4.7,
    "Horsepower": 138
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2018,
    "Price": 50014.7,
    "Mileage": 162826,
    "Engine_Size": 4.8,
    "Horsepower": 152
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2008,
    "Price": 34080.3,
    "Mileage": 65194,
    "Engine_Size": 2.3,
    "Horsepower": 178
  },
  {
    "Brand": "Ford",
    "Model_Year": 2010,
    "Price": 39204.8,
    "Mileage": 29544,
    "Engine_Size": 2.4,
    "Horsepower": 113
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2023,
    "Price": 47620.4,
    "Mileage": 196252,
    "Engine_Size": 3.0,
    "Horsepower": 201
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2010,
    "Price": 44249.25,
    "Mileage": 68295,
    "Engine_Size": 4.8,
    "Horsepower": 87
  },
  {
    "Brand": "BMW",
    "Model_Year": 2006,
    "Price": 42045.5,
    "Mileage": 148710,
    "Engine_Size": 4.5,
    "Horsepower": 162
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2022,
    "Price": 56825.55,
    "Mileage": 74409,
    "Engine_Size": 1.4,
    "Horsepower": 363
  },
  {
    "Brand": "BMW",
    "Model_Year": 2017,
    "Price": 44971.05,
    "Mileage": 131839,
    "Engine_Size": 2.6,
    "Horsepower": 217
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2013,
    "Price": 48245.05,
    "Mileage": 118759,
    "Engine_Size": 3.2,
    "Horsepower": 241
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2023,
    "Price": 52606.15,
    "Mileage": 22157,
    "Engine_Size": 3.0,
    "Horsepower": 120
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2017,
    "Price": 32053.15,
    "Mileage": 181637,
    "Engine_Size": 1.8,
    "Horsepower": 88
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2015,
    "Price": 50554.6,
    "Mileage": 70888,
    "Engine_Size": 4.4,
    "Horsepower": 189
  },
  {
    "Brand": "BMW",
    "Model_Year": 2005,
    "Price": 45760.65,
    "Mileage": 192167,
    "Engine_Size": 3.7,
    "Horsepower": 393
  },
  {
    "Brand": "Honda",
    "Model_Year": 2011,
    "Price": 57802.65,
    "Mileage": 69947,
    "Engine_Size": 4.4,
    "Horsepower": 294
  },
  {
    "Brand": "Ford",
    "Model_Year": 2019,
    "Price": 53634.0,
    "Mileage": 75880,
    "Engine_Size": 4.4,
    "Horsepower": 135
  },
  {
    "Brand": "BMW",
    "Model_Year": 2005,
    "Price": 47091.65,
    "Mileage": 9507,
    "Engine_Size": 4.0,
    "Horsepower": 210
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2016,
    "Price": 45068.3,
    "Mileage": 108134,
    "Engine_Size": 2.8,
    "Horsepower": 258
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2011,
    "Price": 45666.6,
    "Mileage": 48988,
    "Engine_Size": 3.4,
    "Horsepower": 227
  },
  {
    "Brand": "Ford",
    "Model_Year": 2019,
    "Price": 38145.95,
    "Mileage": 103421,
    "Engine_Size": 1.6,
    "Horsepower": 167
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2023,
    "Price": 54418.15,
    "Mileage": 152937,
    "Engine_Size": 3.7,
    "Horsepower": 227
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2005,
    "Price": 34111.45,
    "Mileage": 107591,
    "Engine_Size": 1.7,
    "Horsepower": 315
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2021,
    "Price": 60116.3,
    "Mileage": 134614,
    "Engine_Size": 3.8,
    "Horsepower": 305
  },
  {
    "Brand": "Honda",
    "Model_Year": 2021,
    "Price": 41738.35,
    "Mileage": 32213,
    "Engine_Size": 1.9,
    "Horsepower": 102
  },
  {
    "Brand": "Ford",
    "Model_Year": 2007,
    "Price": 34834.7,
    "Mileage": 192026,
    "Engine_Size": 1.5,
    "Horsepower": 310
  },
  {
    "Brand": "Ford",
    "Model_Year": 2016,
    "Price": 56037.5,
    "Mileage": 62450,
    "Engine_Size": 1.7,
    "Horsepower": 399
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2010,
    "Price": 38048.55,
    "Mileage": 140549,
    "Engine_Size": 1.0,
    "Horsepower": 344
  },
  {
    "Brand": "Honda",
    "Model_Year": 2015,
    "Price": 46394.9,
    "Mileage": 67222,
    "Engine_Size": 3.9,
    "Horsepower": 140
  },
  {
    "Brand": "BMW",
    "Model_Year": 2007,
    "Price": 50180.75,
    "Mileage": 142605,
    "Engine_Size": 3.9,
    "Horsepower": 382
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2012,
    "Price": 45444.65,
    "Mileage": 185467,
    "Engine_Size": 3.1,
    "Horsepower": 285
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2018,
    "Price": 38907.6,
    "Mileage": 159468,
    "Engine_Size": 1.6,
    "Horsepower": 148
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2018,
    "Price": 44278.25,
    "Mileage": 17755,
    "Engine_Size": 1.3,
    "Horsepower": 238
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2014,
    "Price": 43030.15,
    "Mileage": 136937,
    "Engine_Size": 1.1,
    "Horsepower": 367
  },
  {
    "Brand": "BMW",
    "Model_Year": 2006,
    "Price": 28639.75,
    "Mileage": 147245,
    "Engine_Size": 1.7,
    "Horsepower": 249
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2018,
    "Price": 49388.15,
    "Mileage": 194977,
    "Engine_Size": 4.6,
    "Horsepower": 185
  },
  {
    "Brand": "Honda",
    "Model_Year": 2013,
    "Price": 42926.55,
    "Mileage": 174169,
    "Engine_Size": 2.0,
    "Horsepower": 329
  },
  {
    "Brand": "Honda",
    "Model_Year": 2007,
    "Price": 47734.45,
    "Mileage": 38371,
    "Engine_Size": 2.4,
    "Horsepower": 329
  },
  {
    "Brand": "Ford",
    "Model_Year": 2012,
    "Price": 27454.7,
    "Mileage": 147326,
    "Engine_Size": 1.4,
    "Horsepower": 74
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2020,
    "Price": 50950.5,
    "Mileage": 140090,
    "Engine_Size": 1.9,
    "Horsepower": 366
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2006,
    "Price": 43582.4,
    "Mileage": 10192,
    "Engine_Size": 3.1,
    "Horsepower": 177
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2010,
    "Price": 50466.25,
    "Mileage": 7015,
    "Engine_Size": 3.4,
    "Horsepower": 186
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2016,
    "Price": 33885.3,
    "Mileage": 113154,
    "Engine_Size": 2.0,
    "Horsepower": 82
  },
  {
    "Brand": "BMW",
    "Model_Year": 2009,
    "Price": 34294.85,
    "Mileage": 33343,
    "Engine_Size": 1.2,
    "Horsepower": 211
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2006,
    "Price": 43637.7,
    "Mileage": 74306,
    "Engine_Size": 2.6,
    "Horsepower": 257
  },
  {
    "Brand": "Honda",
    "Model_Year": 2020,
    "Price": 56892.55,
    "Mileage": 10829,
    "Engine_Size": 1.9,
    "Horsepower": 350
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2009,
    "Price": 33949.95,
    "Mileage": 39381,
    "Engine_Size": 1.9,
    "Horsepower": 184
  },
  {
    "Brand": "Ford",
    "Model_Year": 2019,
    "Price": 60302.45,
    "Mileage": 116451,
    "Engine_Size": 4.8,
    "Horsepower": 305
  },
  {
    "Brand": "Honda",
    "Model_Year": 2016,
    "Price": 47563.85,
    "Mileage": 23263,
    "Engine_Size": 3.5,
    "Horsepower": 79
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2008,
    "Price": 36941.4,
    "Mileage": 189332,
    "Engine_Size": 3.2,
    "Horsepower": 268
  },
  {
    "Brand": "Ford",
    "Model_Year": 2019,
    "Price": 46842.1,
    "Mileage": 179378,
    "Engine_Size": 2.7,
    "Horsepower": 321
  },
  {
    "Brand": "BMW",
    "Model_Year": 2015,
    "Price": 41544.1,
    "Mileage": 63418,
    "Engine_Size": 2.7,
    "Horsepower": 119
  },
  {
    "Brand": "BMW",
    "Model_Year": 2020,
    "Price": 55577.6,
    "Mileage": 5148,
    "Engine_Size": 3.2,
    "Horsepower": 211
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2010,
    "Price": 49262.7,
    "Mileage": 137826,
    "Engine_Size": 3.8,
    "Horsepower": 340
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2018,
    "Price": 46690.75,
    "Mileage": 31745,
    "Engine_Size": 3.8,
    "Horsepower": 85
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2022,
    "Price": 37380.3,
    "Mileage": 77914,
    "Engine_Size": 1.7,
    "Horsepower": 71
  },
  {
    "Brand": "Ford",
    "Model_Year": 2016,
    "Price": 45270.75,
    "Mileage": 191905,
    "Engine_Size": 3.0,
    "Horsepower": 227
  },
  {
    "Brand": "Honda",
    "Model_Year": 2015,
    "Price": 37381.4,
    "Mileage": 156212,
    "Engine_Size": 2.6,
    "Horsepower": 99
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2017,
    "Price": 56926.35,
    "Mileage": 65653,
    "Engine_Size": 4.5,
    "Horsepower": 151
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2015,
    "Price": 41642.35,
    "Mileage": 197593,
    "Engine_Size": 3.5,
    "Horsepower": 100
  },
  {
    "Brand": "BMW",
    "Model_Year": 2020,
    "Price": 56026.25,
    "Mileage": 83315,
    "Engine_Size": 3.1,
    "Horsepower": 305
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2019,
    "Price": 45399.25,
    "Mileage": 36075,
    "Engine_Size": 1.5,
    "Horsepower": 217
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2019,
    "Price": 50663.55,
    "Mileage": 166769,
    "Engine_Size": 3.4,
    "Horsepower": 246
  },
  {
    "Brand": "Ford",
    "Model_Year": 2008,
    "Price": 21838.2,
    "Mileage": 190616,
    "Engine_Size": 1.5,
    "Horsepower": 104
  },
  {
    "Brand": "BMW",
    "Model_Year": 2015,
    "Price": 39641.25,
    "Mileage": 14795,
    "Engine_Size": 2.3,
    "Horsepower": 92
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2023,
    "Price": 47653.25,
    "Mileage": 69555,
    "Engine_Size": 1.6,
    "Horsepower": 175
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2019,
    "Price": 43110.2,
    "Mileage": 188276,
    "Engine_Size": 3.8,
    "Horsepower": 166
  },
  {
    "Brand": "BMW",
    "Model_Year": 2008,
    "Price": 40762.65,
    "Mileage": 108107,
    "Engine_Size": 1.8,
    "Horsepower": 299
  },
  {
    "Brand": "Ford",
    "Model_Year": 2017,
    "Price": 55467.55,
    "Mileage": 56529,
    "Engine_Size": 2.6,
    "Horsepower": 296
  },
  {
    "Brand": "Ford",
    "Model_Year": 2023,
    "Price": 55865.8,
    "Mileage": 147744,
    "Engine_Size": 4.6,
    "Horsepower": 169
  },
  {
    "Brand": "BMW",
    "Model_Year": 2006,
    "Price": 23719.5,
    "Mileage": 190310,
    "Engine_Size": 1.8,
    "Horsepower": 124
  },
  {
    "Brand": "Ford",
    "Model_Year": 2018,
    "Price": 50180.9,
    "Mileage": 172022,
    "Engine_Size": 3.0,
    "Horsepower": 264
  },
  {
    "Brand": "BMW",
    "Model_Year": 2008,
    "Price": 38709.55,
    "Mileage": 16009,
    "Engine_Size": 2.7,
    "Horsepower": 77
  },
  {
    "Brand": "Honda",
    "Model_Year": 2020,
    "Price": 48498.6,
    "Mileage": 183168,
    "Engine_Size": 1.1,
    "Horsepower": 384
  },
  {
    "Brand": "BMW",
    "Model_Year": 2018,
    "Price": 52287.2,
    "Mileage": 155616,
    "Engine_Size": 4.2,
    "Horsepower": 197
  },
  {
    "Brand": "BMW",
    "Model_Year": 2019,
    "Price": 27945.0,
    "Mileage": 191800,
    "Engine_Size": 1.3,
    "Horsepower": 101
  },
  {
    "Brand": "Ford",
    "Model_Year": 2007,
    "Price": 44152.95,
    "Mileage": 34381,
    "Engine_Size": 2.9,
    "Horsepower": 162
  },
  {
    "Brand": "Ford",
    "Model_Year": 2012,
    "Price": 38078.55,
    "Mileage": 132769,
    "Engine_Size": 3.2,
    "Horsepower": 76
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2020,
    "Price": 52449.05,
    "Mileage": 161359,
    "Engine_Size": 3.5,
    "Horsepower": 327
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2014,
    "Price": 54177.5,
    "Mileage": 69610,
    "Engine_Size": 3.8,
    "Horsepower": 289
  },
  {
    "Brand": "Honda",
    "Model_Year": 2008,
    "Price": 40387.9,
    "Mileage": 73122,
    "Engine_Size": 2.0,
    "Horsepower": 309
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2022,
    "Price": 43479.8,
    "Mileage": 73184,
    "Engine_Size": 1.0,
    "Horsepower": 175
  },
  {
    "Brand": "BMW",
    "Model_Year": 2006,
    "Price": 35517.35,
    "Mileage": 176153,
    "Engine_Size": 3.9,
    "Horsepower": 105
  },
  {
    "Brand": "Ford",
    "Model_Year": 2021,
    "Price": 43376.8,
    "Mileage": 181384,
    "Engine_Size": 3.1,
    "Horsepower": 114
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2017,
    "Price": 62628.6,
    "Mileage": 92228,
    "Engine_Size": 4.3,
    "Horsepower": 367
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2008,
    "Price": 59252.85,
    "Mileage": 77943,
    "Engine_Size": 4.3,
    "Horsepower": 378
  },
  {
    "Brand": "Honda",
    "Model_Year": 2015,
    "Price": 43144.5,
    "Mileage": 85770,
    "Engine_Size": 4.4,
    "Horsepower": 78
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2011,
    "Price": 39614.7,
    "Mileage": 57726,
    "Engine_Size": 2.9,
    "Horsepower": 156
  },
  {
    "Brand": "Honda",
    "Model_Year": 2016,
    "Price": 43348.85,
    "Mileage": 158283,
    "Engine_Size": 2.3,
    "Horsepower": 246
  },
  {
    "Brand": "BMW",
    "Model_Year": 2014,
    "Price": 43001.4,
    "Mileage": 165552,
    "Engine_Size": 4.2,
    "Horsepower": 199
  },
  {
    "Brand": "Ford",
    "Model_Year": 2011,
    "Price": 47700.0,
    "Mileage": 52780,
    "Engine_Size": 2.8,
    "Horsepower": 264
  },
  {
    "Brand": "Honda",
    "Model_Year": 2017,
    "Price": 30810.5,
    "Mileage": 193210,
    "Engine_Size": 1.7,
    "Horsepower": 80
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2011,
    "Price": 62133.85,
    "Mileage": 47503,
    "Engine_Size": 4.4,
    "Horsepower": 375
  },
  {
    "Brand": "Ford",
    "Model_Year": 2021,
    "Price": 56563.35,
    "Mileage": 62893,
    "Engine_Size": 4.5,
    "Horsepower": 191
  },
  {
    "Brand": "Ford",
    "Model_Year": 2014,
    "Price": 45759.75,
    "Mileage": 182265,
    "Engine_Size": 2.9,
    "Horsepower": 304
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2014,
    "Price": 33532.1,
    "Mileage": 66358,
    "Engine_Size": 1.3,
    "Horsepower": 100
  },
  {
    "Brand": "Honda",
    "Model_Year": 2008,
    "Price": 45406.15,
    "Mileage": 85857,
    "Engine_Size": 2.6,
    "Horsepower": 293
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2008,
    "Price": 44013.15,
    "Mileage": 125457,
    "Engine_Size": 4.2,
    "Horsepower": 222
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2011,
    "Price": 52037.55,
    "Mileage": 158189,
    "Engine_Size": 4.6,
    "Horsepower": 281
  },
  {
    "Brand": "Ford",
    "Model_Year": 2005,
    "Price": 25805.6,
    "Mileage": 195128,
    "Engine_Size": 1.8,
    "Horsepower": 161
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2016,
    "Price": 39913.6,
    "Mileage": 122928,
    "Engine_Size": 1.3,
    "Horsepower": 198
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2017,
    "Price": 56434.7,
    "Mileage": 63706,
    "Engine_Size": 4.5,
    "Horsepower": 266
  },
  {
    "Brand": "BMW",
    "Model_Year": 2014,
    "Price": 34113.6,
    "Mileage": 145548,
    "Engine_Size": 2.6,
    "Horsepower": 111
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2019,
    "Price": 55973.7,
    "Mileage": 87806,
    "Engine_Size": 3.2,
    "Horsepower": 297
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2017,
    "Price": 64192.7,
    "Mileage": 60006,
    "Engine_Size": 4.9,
    "Horsepower": 263
  },
  {
    "Brand": "BMW",
    "Model_Year": 2013,
    "Price": 28361.1,
    "Mileage": 92238,
    "Engine_Size": 1.3,
    "Horsepower": 87
  },
  {
    "Brand": "BMW",
    "Model_Year": 2013,
    "Price": 51347.65,
    "Mileage": 199227,
    "Engine_Size": 3.6,
    "Horsepower": 312
  },
  {
    "Brand": "BMW",
    "Model_Year": 2019,
    "Price": 50307.1,
    "Mileage": 50798,
    "Engine_Size": 1.3,
    "Horsepower": 345
  },
  {
    "Brand": "Ford",
    "Model_Year": 2014,
    "Price": 39123.45,
    "Mileage": 82271,
    "Engine_Size": 2.5,
    "Horsepower": 196
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2014,
    "Price": 52494.15,
    "Mileage": 35177,
    "Engine_Size": 4.2,
    "Horsepower": 144
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2012,
    "Price": 37685.9,
    "Mileage": 133022,
    "Engine_Size": 2.7,
    "Horsepower": 131
  },
  {
    "Brand": "Ford",
    "Model_Year": 2020,
    "Price": 65391.2,
    "Mileage": 135156,
    "Engine_Size": 5.0,
    "Horsepower": 357
  },
  {
    "Brand": "BMW",
    "Model_Year": 2021,
    "Price": 58126.25,
    "Mileage": 87215,
    "Engine_Size": 3.2,
    "Horsepower": 255
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2009,
    "Price": 42129.35,
    "Mileage": 48013,
    "Engine_Size": 2.3,
    "Horsepower": 247
  },
  {
    "Brand": "Ford",
    "Model_Year": 2008,
    "Price": 32609.0,
    "Mileage": 87600,
    "Engine_Size": 1.9,
    "Horsepower": 235
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2022,
    "Price": 47297.05,
    "Mileage": 101099,
    "Engine_Size": 2.4,
    "Horsepower": 252
  },
  {
    "Brand": "Ford",
    "Model_Year": 2023,
    "Price": 48511.5,
    "Mileage": 58450,
    "Engine_Size": 2.5,
    "Horsepower": 97
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2008,
    "Price": 34071.0,
    "Mileage": 184000,
    "Engine_Size": 1.3,
    "Horsepower": 399
  },
  {
    "Brand": "BMW",
    "Model_Year": 2011,
    "Price": 46281.0,
    "Mileage": 127640,
    "Engine_Size": 2.5,
    "Horsepower": 316
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2014,
    "Price": 37430.85,
    "Mileage": 97403,
    "Engine_Size": 2.9,
    "Horsepower": 91
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2022,
    "Price": 48703.3,
    "Mileage": 181454,
    "Engine_Size": 3.9,
    "Horsepower": 165
  },
  {
    "Brand": "BMW",
    "Model_Year": 2023,
    "Price": 53293.5,
    "Mileage": 104290,
    "Engine_Size": 3.6,
    "Horsepower": 191
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2008,
    "Price": 46643.4,
    "Mileage": 136832,
    "Engine_Size": 3.8,
    "Horsepower": 319
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2014,
    "Price": 44964.9,
    "Mileage": 29142,
    "Engine_Size": 1.0,
    "Horsepower": 377
  },
  {
    "Brand": "Honda",
    "Model_Year": 2005,
    "Price": 41819.55,
    "Mileage": 115189,
    "Engine_Size": 1.9,
    "Horsepower": 395
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2022,
    "Price": 51222.4,
    "Mileage": 112532,
    "Engine_Size": 3.6,
    "Horsepower": 206
  },
  {
    "Brand": "Honda",
    "Model_Year": 2009,
    "Price": 41704.9,
    "Mileage": 153362,
    "Engine_Size": 2.9,
    "Horsepower": 346
  },
  {
    "Brand": "Honda",
    "Model_Year": 2019,
    "Price": 44784.2,
    "Mileage": 136436,
    "Engine_Size": 1.0,
    "Horsepower": 389
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2021,
    "Price": 51904.95,
    "Mileage": 61921,
    "Engine_Size": 4.2,
    "Horsepower": 130
  },
  {
    "Brand": "BMW",
    "Model_Year": 2007,
    "Price": 52751.15,
    "Mileage": 24797,
    "Engine_Size": 4.1,
    "Horsepower": 319
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2016,
    "Price": 46605.25,
    "Mileage": 37535,
    "Engine_Size": 3.2,
    "Horsepower": 164
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2006,
    "Price": 40288.0,
    "Mileage": 51300,
    "Engine_Size": 1.3,
    "Horsepower": 365
  },
  {
    "Brand": "Ford",
    "Model_Year": 2005,
    "Price": 45911.2,
    "Mileage": 52176,
    "Engine_Size": 4.1,
    "Horsepower": 253
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2021,
    "Price": 63674.75,
    "Mileage": 21105,
    "Engine_Size": 3.3,
    "Horsepower": 329
  },
  {
    "Brand": "Ford",
    "Model_Year": 2020,
    "Price": 61395.45,
    "Mileage": 144011,
    "Engine_Size": 4.1,
    "Horsepower": 356
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2009,
    "Price": 49974.4,
    "Mileage": 84472,
    "Engine_Size": 4.0,
    "Horsepower": 224
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2019,
    "Price": 54814.95,
    "Mileage": 178101,
    "Engine_Size": 4.2,
    "Horsepower": 255
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2007,
    "Price": 34528.25,
    "Mileage": 151935,
    "Engine_Size": 3.1,
    "Horsepower": 138
  },
  {
    "Brand": "Ford",
    "Model_Year": 2011,
    "Price": 47361.15,
    "Mileage": 83097,
    "Engine_Size": 1.6,
    "Horsepower": 395
  },
  {
    "Brand": "BMW",
    "Model_Year": 2015,
    "Price": 55819.05,
    "Mileage": 146519,
    "Engine_Size": 3.7,
    "Horsepower": 330
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2014,
    "Price": 44584.0,
    "Mileage": 101160,
    "Engine_Size": 3.5,
    "Horsepower": 184
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2013,
    "Price": 48741.0,
    "Mileage": 51940,
    "Engine_Size": 4.0,
    "Horsepower": 77
  },
  {
    "Brand": "Ford",
    "Model_Year": 2018,
    "Price": 49120.95,
    "Mileage": 90001,
    "Engine_Size": 1.7,
    "Horsepower": 334
  },
  {
    "Brand": "BMW",
    "Model_Year": 2017,
    "Price": 45178.3,
    "Mileage": 155714,
    "Engine_Size": 1.8,
    "Horsepower": 340
  },
  {
    "Brand": "BMW",
    "Model_Year": 2006,
    "Price": 58283.6,
    "Mileage": 12928,
    "Engine_Size": 4.6,
    "Horsepower": 318
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2007,
    "Price": 46102.9,
    "Mileage": 53002,
    "Engine_Size": 4.0,
    "Horsepower": 174
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2011,
    "Price": 61877.35,
    "Mileage": 89853,
    "Engine_Size": 4.6,
    "Horsepower": 332
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2022,
    "Price": 58031.3,
    "Mileage": 119614,
    "Engine_Size": 4.0,
    "Horsepower": 293
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2007,
    "Price": 52386.15,
    "Mileage": 122517,
    "Engine_Size": 3.4,
    "Horsepower": 397
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2014,
    "Price": 48149.55,
    "Mileage": 161089,
    "Engine_Size": 3.6,
    "Horsepower": 340
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2011,
    "Price": 54051.8,
    "Mileage": 84064,
    "Engine_Size": 4.6,
    "Horsepower": 234
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2013,
    "Price": 41111.3,
    "Mileage": 124694,
    "Engine_Size": 3.3,
    "Horsepower": 152
  },
  {
    "Brand": "BMW",
    "Model_Year": 2021,
    "Price": 56379.75,
    "Mileage": 149385,
    "Engine_Size": 3.5,
    "Horsepower": 364
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2015,
    "Price": 38232.45,
    "Mileage": 137631,
    "Engine_Size": 1.6,
    "Horsepower": 203
  },
  {
    "Brand": "BMW",
    "Model_Year": 2011,
    "Price": 46191.35,
    "Mileage": 55893,
    "Engine_Size": 2.9,
    "Horsepower": 280
  },
  {
    "Brand": "BMW",
    "Model_Year": 2018,
    "Price": 65628.65,
    "Mileage": 20167,
    "Engine_Size": 3.9,
    "Horsepower": 382
  },
  {
    "Brand": "Honda",
    "Model_Year": 2023,
    "Price": 46896.1,
    "Mileage": 43598,
    "Engine_Size": 2.1,
    "Horsepower": 161
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2008,
    "Price": 33476.25,
    "Mileage": 143595,
    "Engine_Size": 1.8,
    "Horsepower": 196
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2010,
    "Price": 41516.15,
    "Mileage": 54777,
    "Engine_Size": 2.3,
    "Horsepower": 260
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2014,
    "Price": 36898.45,
    "Mileage": 164511,
    "Engine_Size": 2.0,
    "Horsepower": 228
  },
  {
    "Brand": "Ford",
    "Model_Year": 2011,
    "Price": 28805.1,
    "Mileage": 121378,
    "Engine_Size": 1.9,
    "Horsepower": 79
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2017,
    "Price": 44329.0,
    "Mileage": 86060,
    "Engine_Size": 2.7,
    "Horsepower": 176
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2018,
    "Price": 57978.75,
    "Mileage": 18285,
    "Engine_Size": 4.6,
    "Horsepower": 156
  },
  {
    "Brand": "Ford",
    "Model_Year": 2008,
    "Price": 32739.75,
    "Mileage": 147045,
    "Engine_Size": 3.0,
    "Horsepower": 136
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2012,
    "Price": 33562.5,
    "Mileage": 127970,
    "Engine_Size": 1.8,
    "Horsepower": 131
  },
  {
    "Brand": "BMW",
    "Model_Year": 2009,
    "Price": 36245.3,
    "Mileage": 27694,
    "Engine_Size": 1.3,
    "Horsepower": 215
  },
  {
    "Brand": "Ford",
    "Model_Year": 2005,
    "Price": 36191.7,
    "Mileage": 171846,
    "Engine_Size": 3.8,
    "Horsepower": 222
  },
  {
    "Brand": "BMW",
    "Model_Year": 2008,
    "Price": 36021.3,
    "Mileage": 140374,
    "Engine_Size": 2.5,
    "Horsepower": 176
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2007,
    "Price": 44945.85,
    "Mileage": 158463,
    "Engine_Size": 4.3,
    "Horsepower": 217
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2013,
    "Price": 55425.45,
    "Mileage": 9611,
    "Engine_Size": 3.6,
    "Horsepower": 255
  },
  {
    "Brand": "Ford",
    "Model_Year": 2012,
    "Price": 58685.4,
    "Mileage": 14372,
    "Engine_Size": 4.2,
    "Horsepower": 247
  },
  {
    "Brand": "Ford",
    "Model_Year": 2005,
    "Price": 37513.8,
    "Mileage": 160384,
    "Engine_Size": 2.1,
    "Horsepower": 335
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2010,
    "Price": 46083.4,
    "Mileage": 150152,
    "Engine_Size": 3.8,
    "Horsepower": 218
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2013,
    "Price": 45445.1,
    "Mileage": 85618,
    "Engine_Size": 2.1,
    "Horsepower": 316
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2011,
    "Price": 56208.75,
    "Mileage": 117945,
    "Engine_Size": 4.8,
    "Horsepower": 323
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2008,
    "Price": 35191.15,
    "Mileage": 113397,
    "Engine_Size": 3.5,
    "Horsepower": 98
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2017,
    "Price": 52708.35,
    "Mileage": 101213,
    "Engine_Size": 2.3,
    "Horsepower": 335
  },
  {
    "Brand": "BMW",
    "Model_Year": 2021,
    "Price": 45999.3,
    "Mileage": 25874,
    "Engine_Size": 2.1,
    "Horsepower": 82
  },
  {
    "Brand": "Ford",
    "Model_Year": 2006,
    "Price": 25114.55,
    "Mileage": 198609,
    "Engine_Size": 1.8,
    "Horsepower": 116
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2009,
    "Price": 41645.55,
    "Mileage": 137669,
    "Engine_Size": 3.8,
    "Horsepower": 220
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2016,
    "Price": 37712.0,
    "Mileage": 16600,
    "Engine_Size": 1.9,
    "Horsepower": 119
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2012,
    "Price": 47693.05,
    "Mileage": 139819,
    "Engine_Size": 3.4,
    "Horsepower": 284
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2010,
    "Price": 37889.25,
    "Mileage": 84415,
    "Engine_Size": 2.1,
    "Horsepower": 201
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2012,
    "Price": 41638.65,
    "Mileage": 160887,
    "Engine_Size": 3.6,
    "Horsepower": 182
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2022,
    "Price": 61249.600000000006,
    "Mileage": 99348,
    "Engine_Size": 4.3,
    "Horsepower": 321
  },
  {
    "Brand": "BMW",
    "Model_Year": 2007,
    "Price": 40526.2,
    "Mileage": 110736,
    "Engine_Size": 4.1,
    "Horsepower": 122
  },
  {
    "Brand": "Ford",
    "Model_Year": 2016,
    "Price": 55243.3,
    "Mileage": 29714,
    "Engine_Size": 4.0,
    "Horsepower": 199
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2007,
    "Price": 40237.9,
    "Mileage": 154962,
    "Engine_Size": 1.8,
    "Horsepower": 393
  },
  {
    "Brand": "Ford",
    "Model_Year": 2010,
    "Price": 31672.95,
    "Mileage": 197581,
    "Engine_Size": 1.4,
    "Horsepower": 262
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2006,
    "Price": 36539.2,
    "Mileage": 197896,
    "Engine_Size": 3.8,
    "Horsepower": 148
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2016,
    "Price": 36478.15,
    "Mileage": 140797,
    "Engine_Size": 2.5,
    "Horsepower": 126
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2006,
    "Price": 27336.15,
    "Mileage": 179277,
    "Engine_Size": 2.7,
    "Horsepower": 166
  },
  {
    "Brand": "BMW",
    "Model_Year": 2010,
    "Price": 32058.2,
    "Mileage": 156756,
    "Engine_Size": 1.1,
    "Horsepower": 267
  },
  {
    "Brand": "Honda",
    "Model_Year": 2021,
    "Price": 40373.85,
    "Mileage": 193983,
    "Engine_Size": 2.0,
    "Horsepower": 204
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2007,
    "Price": 30732.35,
    "Mileage": 116573,
    "Engine_Size": 1.1,
    "Horsepower": 216
  },
  {
    "Brand": "Honda",
    "Model_Year": 2006,
    "Price": 54198.4,
    "Mileage": 18092,
    "Engine_Size": 4.5,
    "Horsepower": 241
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2012,
    "Price": 33548.1,
    "Mileage": 100918,
    "Engine_Size": 2.0,
    "Horsepower": 132
  },
  {
    "Brand": "Honda",
    "Model_Year": 2016,
    "Price": 37663.9,
    "Mileage": 175842,
    "Engine_Size": 3.2,
    "Horsepower": 134
  },
  {
    "Brand": "BMW",
    "Model_Year": 2008,
    "Price": 42125.15,
    "Mileage": 30457,
    "Engine_Size": 1.2,
    "Horsepower": 364
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2009,
    "Price": 48318.65,
    "Mileage": 76667,
    "Engine_Size": 3.7,
    "Horsepower": 280
  },
  {
    "Brand": "Honda",
    "Model_Year": 2017,
    "Price": 38734.45,
    "Mileage": 95751,
    "Engine_Size": 2.3,
    "Horsepower": 178
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2019,
    "Price": 65917.3,
    "Mileage": 67894,
    "Engine_Size": 4.6,
    "Horsepower": 351
  },
  {
    "Brand": "Honda",
    "Model_Year": 2020,
    "Price": 62643.75,
    "Mileage": 66305,
    "Engine_Size": 4.6,
    "Horsepower": 241
  },
  {
    "Brand": "BMW",
    "Model_Year": 2014,
    "Price": 34517.8,
    "Mileage": 148684,
    "Engine_Size": 2.3,
    "Horsepower": 81
  },
  {
    "Brand": "Honda",
    "Model_Year": 2020,
    "Price": 56640.95,
    "Mileage": 173161,
    "Engine_Size": 4.6,
    "Horsepower": 289
  },
  {
    "Brand": "Honda",
    "Model_Year": 2016,
    "Price": 64242.15,
    "Mileage": 57137,
    "Engine_Size": 5.0,
    "Horsepower": 355
  },
  {
    "Brand": "Honda",
    "Model_Year": 2021,
    "Price": 61540.05,
    "Mileage": 5559,
    "Engine_Size": 4.3,
    "Horsepower": 241
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2020,
    "Price": 59519.55,
    "Mileage": 71249,
    "Engine_Size": 4.4,
    "Horsepower": 305
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2016,
    "Price": 46913.95,
    "Mileage": 42361,
    "Engine_Size": 2.0,
    "Horsepower": 235
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2012,
    "Price": 49672.0,
    "Mileage": 85720,
    "Engine_Size": 3.3,
    "Horsepower": 256
  },
  {
    "Brand": "BMW",
    "Model_Year": 2007,
    "Price": 34457.95,
    "Mileage": 20261,
    "Engine_Size": 1.3,
    "Horsepower": 239
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2020,
    "Price": 39066.4,
    "Mileage": 25372,
    "Engine_Size": 1.4,
    "Horsepower": 121
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2017,
    "Price": 68727.25,
    "Mileage": 60355,
    "Engine_Size": 5.0,
    "Horsepower": 388
  },
  {
    "Brand": "Honda",
    "Model_Year": 2023,
    "Price": 53387.0,
    "Mileage": 103560,
    "Engine_Size": 2.3,
    "Horsepower": 258
  },
  {
    "Brand": "Honda",
    "Model_Year": 2012,
    "Price": 45814.4,
    "Mileage": 193992,
    "Engine_Size": 4.0,
    "Horsepower": 189
  },
  {
    "Brand": "BMW",
    "Model_Year": 2009,
    "Price": 38914.2,
    "Mileage": 168616,
    "Engine_Size": 4.2,
    "Horsepower": 174
  },
  {
    "Brand": "Honda",
    "Model_Year": 2012,
    "Price": 58735.15,
    "Mileage": 5037,
    "Engine_Size": 4.4,
    "Horsepower": 231
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2016,
    "Price": 57510.8,
    "Mileage": 179104,
    "Engine_Size": 5.0,
    "Horsepower": 364
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2005,
    "Price": 30955.0,
    "Mileage": 46420,
    "Engine_Size": 2.0,
    "Horsepower": 110
  },
  {
    "Brand": "Ford",
    "Model_Year": 2010,
    "Price": 37226.85,
    "Mileage": 102243,
    "Engine_Size": 1.2,
    "Horsepower": 234
  },
  {
    "Brand": "Honda",
    "Model_Year": 2022,
    "Price": 59036.0,
    "Mileage": 134380,
    "Engine_Size": 2.6,
    "Horsepower": 390
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2012,
    "Price": 36484.0,
    "Mileage": 39600,
    "Engine_Size": 1.5,
    "Horsepower": 229
  },
  {
    "Brand": "Ford",
    "Model_Year": 2011,
    "Price": 34019.15,
    "Mileage": 184357,
    "Engine_Size": 1.1,
    "Horsepower": 333
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2005,
    "Price": 23636.0,
    "Mileage": 198080,
    "Engine_Size": 2.4,
    "Horsepower": 87
  },
  {
    "Brand": "Ford",
    "Model_Year": 2020,
    "Price": 54962.0,
    "Mileage": 94520,
    "Engine_Size": 4.1,
    "Horsepower": 242
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2016,
    "Price": 47317.65,
    "Mileage": 10167,
    "Engine_Size": 3.3,
    "Horsepower": 102
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2010,
    "Price": 50660.4,
    "Mileage": 5432,
    "Engine_Size": 2.3,
    "Horsepower": 330
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2006,
    "Price": 46819.65,
    "Mileage": 74687,
    "Engine_Size": 3.6,
    "Horsepower": 279
  },
  {
    "Brand": "Ford",
    "Model_Year": 2018,
    "Price": 50180.65,
    "Mileage": 76947,
    "Engine_Size": 1.9,
    "Horsepower": 399
  },
  {
    "Brand": "BMW",
    "Model_Year": 2008,
    "Price": 30034.800000000003,
    "Mileage": 101324,
    "Engine_Size": 1.1,
    "Horsepower": 233
  },
  {
    "Brand": "Ford",
    "Model_Year": 2005,
    "Price": 39774.85,
    "Mileage": 55903,
    "Engine_Size": 4.1,
    "Horsepower": 74
  },
  {
    "Brand": "Honda",
    "Model_Year": 2022,
    "Price": 41326.95,
    "Mileage": 190221,
    "Engine_Size": 3.5,
    "Horsepower": 103
  },
  {
    "Brand": "Honda",
    "Model_Year": 2017,
    "Price": 55364.0,
    "Mileage": 192840,
    "Engine_Size": 4.0,
    "Horsepower": 349
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2006,
    "Price": 22462.2,
    "Mileage": 196256,
    "Engine_Size": 1.2,
    "Horsepower": 214
  },
  {
    "Brand": "BMW",
    "Model_Year": 2013,
    "Price": 51222.4,
    "Mileage": 70792,
    "Engine_Size": 4.3,
    "Horsepower": 140
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2006,
    "Price": 47315.05,
    "Mileage": 38439,
    "Engine_Size": 3.5,
    "Horsepower": 299
  },
  {
    "Brand": "Honda",
    "Model_Year": 2013,
    "Price": 42988.55,
    "Mileage": 169329,
    "Engine_Size": 3.3,
    "Horsepower": 194
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2005,
    "Price": 42015.7,
    "Mileage": 180746,
    "Engine_Size": 3.5,
    "Horsepower": 347
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2015,
    "Price": 63017.6,
    "Mileage": 56248,
    "Engine_Size": 4.5,
    "Horsepower": 340
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2007,
    "Price": 30346.85,
    "Mileage": 181443,
    "Engine_Size": 3.3,
    "Horsepower": 84
  },
  {
    "Brand": "Honda",
    "Model_Year": 2008,
    "Price": 39977.55,
    "Mileage": 173369,
    "Engine_Size": 3.3,
    "Horsepower": 311
  },
  {
    "Brand": "Honda",
    "Model_Year": 2022,
    "Price": 59157.75,
    "Mileage": 190345,
    "Engine_Size": 5.0,
    "Horsepower": 222
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2010,
    "Price": 35758.6,
    "Mileage": 197328,
    "Engine_Size": 4.0,
    "Horsepower": 122
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2007,
    "Price": 43239.85,
    "Mileage": 39743,
    "Engine_Size": 2.8,
    "Horsepower": 218
  },
  {
    "Brand": "Ford",
    "Model_Year": 2015,
    "Price": 52569.85,
    "Mileage": 84803,
    "Engine_Size": 3.8,
    "Horsepower": 288
  },
  {
    "Brand": "Honda",
    "Model_Year": 2019,
    "Price": 48797.15,
    "Mileage": 80117,
    "Engine_Size": 2.6,
    "Horsepower": 182
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2009,
    "Price": 43488.2,
    "Mileage": 27076,
    "Engine_Size": 1.9,
    "Horsepower": 357
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2014,
    "Price": 53069.85,
    "Mileage": 92483,
    "Engine_Size": 3.4,
    "Horsepower": 346
  },
  {
    "Brand": "BMW",
    "Model_Year": 2016,
    "Price": 47896.25,
    "Mileage": 139035,
    "Engine_Size": 4.7,
    "Horsepower": 152
  },
  {
    "Brand": "Ford",
    "Model_Year": 2019,
    "Price": 59494.15,
    "Mileage": 124217,
    "Engine_Size": 4.7,
    "Horsepower": 287
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2021,
    "Price": 49839.1,
    "Mileage": 149938,
    "Engine_Size": 2.4,
    "Horsepower": 295
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2014,
    "Price": 50391.8,
    "Mileage": 109504,
    "Engine_Size": 3.1,
    "Horsepower": 339
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2010,
    "Price": 28035.15,
    "Mileage": 168377,
    "Engine_Size": 1.8,
    "Horsepower": 84
  },
  {
    "Brand": "Ford",
    "Model_Year": 2022,
    "Price": 65206.25,
    "Mileage": 198475,
    "Engine_Size": 5.0,
    "Horsepower": 359
  },
  {
    "Brand": "Ford",
    "Model_Year": 2017,
    "Price": 67052.55,
    "Mileage": 110649,
    "Engine_Size": 4.9,
    "Horsepower": 334
  },
  {
    "Brand": "Ford",
    "Model_Year": 2007,
    "Price": 41454.8,
    "Mileage": 131244,
    "Engine_Size": 3.6,
    "Horsepower": 268
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2014,
    "Price": 56812.35,
    "Mileage": 37813,
    "Engine_Size": 4.2,
    "Horsepower": 227
  },
  {
    "Brand": "Ford",
    "Model_Year": 2018,
    "Price": 61289.55,
    "Mileage": 71729,
    "Engine_Size": 3.9,
    "Horsepower": 276
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2010,
    "Price": 39902.1,
    "Mileage": 196758,
    "Engine_Size": 3.4,
    "Horsepower": 243
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2007,
    "Price": 37981.4,
    "Mileage": 9512,
    "Engine_Size": 1.2,
    "Horsepower": 253
  },
  {
    "Brand": "Ford",
    "Model_Year": 2020,
    "Price": 54832.1,
    "Mileage": 158738,
    "Engine_Size": 2.8,
    "Horsepower": 334
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2011,
    "Price": 46461.9,
    "Mileage": 152702,
    "Engine_Size": 3.7,
    "Horsepower": 315
  },
  {
    "Brand": "BMW",
    "Model_Year": 2018,
    "Price": 47667.65,
    "Mileage": 122907,
    "Engine_Size": 3.7,
    "Horsepower": 105
  },
  {
    "Brand": "Ford",
    "Model_Year": 2013,
    "Price": 46935.6,
    "Mileage": 136708,
    "Engine_Size": 2.5,
    "Horsepower": 328
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2019,
    "Price": 48434.65,
    "Mileage": 139847,
    "Engine_Size": 4.8,
    "Horsepower": 88
  },
  {
    "Brand": "Honda",
    "Model_Year": 2007,
    "Price": 30942.45,
    "Mileage": 69591,
    "Engine_Size": 1.7,
    "Horsepower": 92
  },
  {
    "Brand": "Ford",
    "Model_Year": 2006,
    "Price": 43754.45,
    "Mileage": 16351,
    "Engine_Size": 3.0,
    "Horsepower": 173
  },
  {
    "Brand": "Honda",
    "Model_Year": 2006,
    "Price": 48267.0,
    "Mileage": 120400,
    "Engine_Size": 3.8,
    "Horsepower": 310
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2007,
    "Price": 45062.35,
    "Mileage": 125533,
    "Engine_Size": 3.8,
    "Horsepower": 273
  },
  {
    "Brand": "BMW",
    "Model_Year": 2022,
    "Price": 57324.65,
    "Mileage": 108627,
    "Engine_Size": 3.6,
    "Horsepower": 322
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2018,
    "Price": 35705.2,
    "Mileage": 191256,
    "Engine_Size": 2.1,
    "Horsepower": 211
  },
  {
    "Brand": "BMW",
    "Model_Year": 2022,
    "Price": 54232.95,
    "Mileage": 133381,
    "Engine_Size": 1.6,
    "Horsepower": 371
  },
  {
    "Brand": "Ford",
    "Model_Year": 2014,
    "Price": 50248.65,
    "Mileage": 100707,
    "Engine_Size": 3.5,
    "Horsepower": 212
  },
  {
    "Brand": "Honda",
    "Model_Year": 2006,
    "Price": 49146.1,
    "Mileage": 86678,
    "Engine_Size": 3.4,
    "Horsepower": 340
  },
  {
    "Brand": "Honda",
    "Model_Year": 2005,
    "Price": 39195.55,
    "Mileage": 78309,
    "Engine_Size": 1.7,
    "Horsepower": 376
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2008,
    "Price": 49446.1,
    "Mileage": 15778,
    "Engine_Size": 3.8,
    "Horsepower": 179
  },
  {
    "Brand": "Honda",
    "Model_Year": 2018,
    "Price": 42376.35,
    "Mileage": 148573,
    "Engine_Size": 2.8,
    "Horsepower": 77
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2005,
    "Price": 37628.35,
    "Mileage": 117713,
    "Engine_Size": 3.7,
    "Horsepower": 138
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2018,
    "Price": 59191.0,
    "Mileage": 138180,
    "Engine_Size": 4.3,
    "Horsepower": 259
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2020,
    "Price": 47459.9,
    "Mileage": 41382,
    "Engine_Size": 1.7,
    "Horsepower": 248
  },
  {
    "Brand": "Ford",
    "Model_Year": 2018,
    "Price": 34003.65,
    "Mileage": 80787,
    "Engine_Size": 1.1,
    "Horsepower": 132
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2007,
    "Price": 46111.95,
    "Mileage": 28341,
    "Engine_Size": 4.1,
    "Horsepower": 137
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2007,
    "Price": 44597.05,
    "Mileage": 150439,
    "Engine_Size": 3.4,
    "Horsepower": 275
  },
  {
    "Brand": "Honda",
    "Model_Year": 2013,
    "Price": 38805.65,
    "Mileage": 124967,
    "Engine_Size": 3.8,
    "Horsepower": 75
  },
  {
    "Brand": "Honda",
    "Model_Year": 2010,
    "Price": 45032.7,
    "Mileage": 136066,
    "Engine_Size": 4.4,
    "Horsepower": 188
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2017,
    "Price": 61327.3,
    "Mileage": 148074,
    "Engine_Size": 4.2,
    "Horsepower": 382
  },
  {
    "Brand": "Honda",
    "Model_Year": 2006,
    "Price": 42576.0,
    "Mileage": 90820,
    "Engine_Size": 4.8,
    "Horsepower": 100
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2012,
    "Price": 41122.55,
    "Mileage": 64949,
    "Engine_Size": 3.1,
    "Horsepower": 75
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2006,
    "Price": 41070.4,
    "Mileage": 151772,
    "Engine_Size": 3.0,
    "Horsepower": 276
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2008,
    "Price": 41438.85,
    "Mileage": 67543,
    "Engine_Size": 2.6,
    "Horsepower": 226
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2019,
    "Price": 31728.5,
    "Mileage": 165390,
    "Engine_Size": 1.6,
    "Horsepower": 136
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2008,
    "Price": 53650.5,
    "Mileage": 32610,
    "Engine_Size": 3.3,
    "Horsepower": 399
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2017,
    "Price": 53040.7,
    "Mileage": 70226,
    "Engine_Size": 2.1,
    "Horsepower": 358
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2016,
    "Price": 60804.65,
    "Mileage": 50167,
    "Engine_Size": 4.7,
    "Horsepower": 209
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2017,
    "Price": 55410.45,
    "Mileage": 164011,
    "Engine_Size": 3.3,
    "Horsepower": 369
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2018,
    "Price": 36892.15,
    "Mileage": 197437,
    "Engine_Size": 3.4,
    "Horsepower": 82
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2022,
    "Price": 50761.95,
    "Mileage": 72381,
    "Engine_Size": 2.4,
    "Horsepower": 221
  },
  {
    "Brand": "BMW",
    "Model_Year": 2010,
    "Price": 42788.5,
    "Mileage": 51710,
    "Engine_Size": 1.2,
    "Horsepower": 382
  },
  {
    "Brand": "Ford",
    "Model_Year": 2015,
    "Price": 39186.7,
    "Mileage": 21766,
    "Engine_Size": 1.1,
    "Horsepower": 178
  },
  {
    "Brand": "Honda",
    "Model_Year": 2006,
    "Price": 37146.2,
    "Mileage": 107416,
    "Engine_Size": 2.7,
    "Horsepower": 218
  },
  {
    "Brand": "BMW",
    "Model_Year": 2023,
    "Price": 48707.0,
    "Mileage": 17780,
    "Engine_Size": 1.3,
    "Horsepower": 273
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2023,
    "Price": 63671.100000000006,
    "Mileage": 53458,
    "Engine_Size": 3.4,
    "Horsepower": 376
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2009,
    "Price": 43359.95,
    "Mileage": 61221,
    "Engine_Size": 4.5,
    "Horsepower": 90
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2023,
    "Price": 60164.55,
    "Mileage": 6509,
    "Engine_Size": 4.5,
    "Horsepower": 129
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2006,
    "Price": 36639.35,
    "Mileage": 94493,
    "Engine_Size": 3.6,
    "Horsepower": 90
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2014,
    "Price": 43279.1,
    "Mileage": 170418,
    "Engine_Size": 1.8,
    "Horsepower": 314
  },
  {
    "Brand": "Ford",
    "Model_Year": 2006,
    "Price": 39560.5,
    "Mileage": 121850,
    "Engine_Size": 4.5,
    "Horsepower": 142
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2015,
    "Price": 45324.7,
    "Mileage": 182946,
    "Engine_Size": 4.5,
    "Horsepower": 145
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2022,
    "Price": 46430.0,
    "Mileage": 162220,
    "Engine_Size": 1.8,
    "Horsepower": 255
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2019,
    "Price": 56320.35,
    "Mileage": 36533,
    "Engine_Size": 3.9,
    "Horsepower": 147
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2013,
    "Price": 31025.800000000003,
    "Mileage": 113144,
    "Engine_Size": 2.1,
    "Horsepower": 134
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2023,
    "Price": 65814.9,
    "Mileage": 127402,
    "Engine_Size": 4.2,
    "Horsepower": 359
  },
  {
    "Brand": "Ford",
    "Model_Year": 2013,
    "Price": 49846.65,
    "Mileage": 83467,
    "Engine_Size": 5.0,
    "Horsepower": 125
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2007,
    "Price": 41001.05,
    "Mileage": 6359,
    "Engine_Size": 1.1,
    "Horsepower": 328
  },
  {
    "Brand": "Ford",
    "Model_Year": 2013,
    "Price": 54508.05,
    "Mileage": 124119,
    "Engine_Size": 4.6,
    "Horsepower": 259
  },
  {
    "Brand": "Honda",
    "Model_Year": 2018,
    "Price": 37587.75,
    "Mileage": 196385,
    "Engine_Size": 3.5,
    "Horsepower": 75
  },
  {
    "Brand": "Honda",
    "Model_Year": 2023,
    "Price": 58700.8,
    "Mileage": 25344,
    "Engine_Size": 4.9,
    "Horsepower": 75
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2011,
    "Price": 41905.05,
    "Mileage": 123499,
    "Engine_Size": 2.9,
    "Horsepower": 260
  },
  {
    "Brand": "Ford",
    "Model_Year": 2020,
    "Price": 59398.1,
    "Mileage": 74778,
    "Engine_Size": 4.4,
    "Horsepower": 217
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2020,
    "Price": 49521.95,
    "Mileage": 25601,
    "Engine_Size": 1.2,
    "Horsepower": 327
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2005,
    "Price": 39378.6,
    "Mileage": 155188,
    "Engine_Size": 2.3,
    "Horsepower": 287
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2008,
    "Price": 21525.15,
    "Mileage": 193057,
    "Engine_Size": 1.3,
    "Horsepower": 159
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2008,
    "Price": 56074.35,
    "Mileage": 106013,
    "Engine_Size": 4.9,
    "Horsepower": 381
  },
  {
    "Brand": "Honda",
    "Model_Year": 2011,
    "Price": 50133.9,
    "Mileage": 35782,
    "Engine_Size": 4.3,
    "Horsepower": 79
  },
  {
    "Brand": "Honda",
    "Model_Year": 2012,
    "Price": 45364.25,
    "Mileage": 116095,
    "Engine_Size": 4.4,
    "Horsepower": 156
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2021,
    "Price": 62770.45,
    "Mileage": 185891,
    "Engine_Size": 4.8,
    "Horsepower": 319
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2009,
    "Price": 44318.85,
    "Mileage": 102123,
    "Engine_Size": 1.3,
    "Horsepower": 395
  },
  {
    "Brand": "Ford",
    "Model_Year": 2011,
    "Price": 41434.1,
    "Mileage": 49458,
    "Engine_Size": 2.5,
    "Horsepower": 220
  },
  {
    "Brand": "Honda",
    "Model_Year": 2008,
    "Price": 26390.75,
    "Mileage": 129225,
    "Engine_Size": 1.3,
    "Horsepower": 182
  },
  {
    "Brand": "Ford",
    "Model_Year": 2010,
    "Price": 29414.4,
    "Mileage": 144152,
    "Engine_Size": 1.8,
    "Horsepower": 99
  },
  {
    "Brand": "Honda",
    "Model_Year": 2011,
    "Price": 33772.55,
    "Mileage": 170029,
    "Engine_Size": 1.9,
    "Horsepower": 197
  },
  {
    "Brand": "Honda",
    "Model_Year": 2022,
    "Price": 44251.0,
    "Mileage": 149980,
    "Engine_Size": 2.9,
    "Horsepower": 147
  },
  {
    "Brand": "BMW",
    "Model_Year": 2009,
    "Price": 32855.6,
    "Mileage": 101188,
    "Engine_Size": 2.1,
    "Horsepower": 124
  },
  {
    "Brand": "Honda",
    "Model_Year": 2007,
    "Price": 37450.4,
    "Mileage": 126292,
    "Engine_Size": 1.4,
    "Horsepower": 374
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2011,
    "Price": 30635.5,
    "Mileage": 95570,
    "Engine_Size": 1.7,
    "Horsepower": 103
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2018,
    "Price": 42227.45,
    "Mileage": 128791,
    "Engine_Size": 1.6,
    "Horsepower": 174
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2011,
    "Price": 50117.3,
    "Mileage": 183554,
    "Engine_Size": 4.9,
    "Horsepower": 241
  },
  {
    "Brand": "Ford",
    "Model_Year": 2009,
    "Price": 42514.45,
    "Mileage": 130291,
    "Engine_Size": 4.0,
    "Horsepower": 91
  },
  {
    "Brand": "Honda",
    "Model_Year": 2009,
    "Price": 55870.25,
    "Mileage": 103375,
    "Engine_Size": 4.9,
    "Horsepower": 356
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2006,
    "Price": 37694.3,
    "Mileage": 43314,
    "Engine_Size": 2.8,
    "Horsepower": 174
  },
  {
    "Brand": "Ford",
    "Model_Year": 2010,
    "Price": 39456.0,
    "Mileage": 113880,
    "Engine_Size": 2.1,
    "Horsepower": 218
  },
  {
    "Brand": "BMW",
    "Model_Year": 2019,
    "Price": 59022.7,
    "Mileage": 105326,
    "Engine_Size": 4.2,
    "Horsepower": 341
  },
  {
    "Brand": "Ford",
    "Model_Year": 2014,
    "Price": 42538.85,
    "Mileage": 151903,
    "Engine_Size": 2.3,
    "Horsepower": 345
  },
  {
    "Brand": "Ford",
    "Model_Year": 2011,
    "Price": 46832.7,
    "Mileage": 126026,
    "Engine_Size": 2.2,
    "Horsepower": 368
  },
  {
    "Brand": "Honda",
    "Model_Year": 2009,
    "Price": 36157.15,
    "Mileage": 156197,
    "Engine_Size": 1.9,
    "Horsepower": 241
  },
  {
    "Brand": "BMW",
    "Model_Year": 2005,
    "Price": 28721.45,
    "Mileage": 67451,
    "Engine_Size": 1.5,
    "Horsepower": 116
  },
  {
    "Brand": "Ford",
    "Model_Year": 2017,
    "Price": 43996.6,
    "Mileage": 50708,
    "Engine_Size": 2.0,
    "Horsepower": 183
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2022,
    "Price": 56442.9,
    "Mileage": 22682,
    "Engine_Size": 2.4,
    "Horsepower": 344
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2017,
    "Price": 58758.7,
    "Mileage": 107406,
    "Engine_Size": 3.7,
    "Horsepower": 373
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2022,
    "Price": 41724.7,
    "Mileage": 171866,
    "Engine_Size": 1.3,
    "Horsepower": 276
  },
  {
    "Brand": "BMW",
    "Model_Year": 2009,
    "Price": 42608.4,
    "Mileage": 64372,
    "Engine_Size": 1.8,
    "Horsepower": 311
  },
  {
    "Brand": "BMW",
    "Model_Year": 2017,
    "Price": 66138.15,
    "Mileage": 44477,
    "Engine_Size": 4.2,
    "Horsepower": 370
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2008,
    "Price": 32592.25,
    "Mileage": 189935,
    "Engine_Size": 1.6,
    "Horsepower": 265
  },
  {
    "Brand": "Ford",
    "Model_Year": 2021,
    "Price": 47540.55,
    "Mileage": 174809,
    "Engine_Size": 2.4,
    "Horsepower": 233
  },
  {
    "Brand": "BMW",
    "Model_Year": 2007,
    "Price": 50435.4,
    "Mileage": 138692,
    "Engine_Size": 4.5,
    "Horsepower": 245
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2021,
    "Price": 48512.55,
    "Mileage": 171129,
    "Engine_Size": 1.6,
    "Horsepower": 340
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2015,
    "Price": 33226.5,
    "Mileage": 176210,
    "Engine_Size": 1.3,
    "Horsepower": 179
  },
  {
    "Brand": "Honda",
    "Model_Year": 2008,
    "Price": 41037.8,
    "Mileage": 58024,
    "Engine_Size": 2.9,
    "Horsepower": 241
  },
  {
    "Brand": "BMW",
    "Model_Year": 2006,
    "Price": 32128.550000000003,
    "Mileage": 145749,
    "Engine_Size": 2.2,
    "Horsepower": 271
  },
  {
    "Brand": "Ford",
    "Model_Year": 2020,
    "Price": 48284.85,
    "Mileage": 180183,
    "Engine_Size": 3.3,
    "Horsepower": 237
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2022,
    "Price": 49170.7,
    "Mileage": 160146,
    "Engine_Size": 4.2,
    "Horsepower": 171
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2012,
    "Price": 36605.8,
    "Mileage": 22824,
    "Engine_Size": 1.5,
    "Horsepower": 155
  },
  {
    "Brand": "Ford",
    "Model_Year": 2007,
    "Price": 40559.15,
    "Mileage": 136837,
    "Engine_Size": 3.3,
    "Horsepower": 211
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2013,
    "Price": 48392.45,
    "Mileage": 181511,
    "Engine_Size": 3.0,
    "Horsepower": 282
  },
  {
    "Brand": "Honda",
    "Model_Year": 2010,
    "Price": 31042.45,
    "Mileage": 102151,
    "Engine_Size": 1.6,
    "Horsepower": 120
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2014,
    "Price": 47750.7,
    "Mileage": 53926,
    "Engine_Size": 3.5,
    "Horsepower": 181
  },
  {
    "Brand": "BMW",
    "Model_Year": 2014,
    "Price": 42867.4,
    "Mileage": 172932,
    "Engine_Size": 2.1,
    "Horsepower": 340
  },
  {
    "Brand": "Honda",
    "Model_Year": 2017,
    "Price": 48766.25,
    "Mileage": 17975,
    "Engine_Size": 3.0,
    "Horsepower": 134
  },
  {
    "Brand": "BMW",
    "Model_Year": 2021,
    "Price": 44394.15,
    "Mileage": 79877,
    "Engine_Size": 1.3,
    "Horsepower": 252
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2013,
    "Price": 39713.5,
    "Mileage": 82870,
    "Engine_Size": 2.8,
    "Horsepower": 79
  },
  {
    "Brand": "Honda",
    "Model_Year": 2021,
    "Price": 54516.45,
    "Mileage": 86371,
    "Engine_Size": 2.2,
    "Horsepower": 303
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2013,
    "Price": 52784.0,
    "Mileage": 162620,
    "Engine_Size": 4.3,
    "Horsepower": 367
  },
  {
    "Brand": "Honda",
    "Model_Year": 2013,
    "Price": 42370.5,
    "Mileage": 105970,
    "Engine_Size": 1.2,
    "Horsepower": 313
  },
  {
    "Brand": "Honda",
    "Model_Year": 2005,
    "Price": 39716.7,
    "Mileage": 103066,
    "Engine_Size": 2.7,
    "Horsepower": 336
  },
  {
    "Brand": "Honda",
    "Model_Year": 2006,
    "Price": 32142.6,
    "Mileage": 174808,
    "Engine_Size": 2.8,
    "Horsepower": 187
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2020,
    "Price": 55580.9,
    "Mileage": 66562,
    "Engine_Size": 3.9,
    "Horsepower": 213
  },
  {
    "Brand": "Honda",
    "Model_Year": 2005,
    "Price": 45886.55,
    "Mileage": 45409,
    "Engine_Size": 3.3,
    "Horsepower": 270
  },
  {
    "Brand": "BMW",
    "Model_Year": 2014,
    "Price": 56709.3,
    "Mileage": 14834,
    "Engine_Size": 3.7,
    "Horsepower": 308
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2022,
    "Price": 62966.4,
    "Mileage": 107192,
    "Engine_Size": 4.1,
    "Horsepower": 315
  },
  {
    "Brand": "Ford",
    "Model_Year": 2012,
    "Price": 47426.0,
    "Mileage": 5840,
    "Engine_Size": 4.4,
    "Horsepower": 77
  },
  {
    "Brand": "Honda",
    "Model_Year": 2015,
    "Price": 45506.6,
    "Mileage": 36568,
    "Engine_Size": 2.3,
    "Horsepower": 221
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2006,
    "Price": 47956.7,
    "Mileage": 15846,
    "Engine_Size": 3.2,
    "Horsepower": 280
  },
  {
    "Brand": "Honda",
    "Model_Year": 2012,
    "Price": 50799.45,
    "Mileage": 141971,
    "Engine_Size": 4.4,
    "Horsepower": 227
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2012,
    "Price": 49005.1,
    "Mileage": 91038,
    "Engine_Size": 5.0,
    "Horsepower": 127
  },
  {
    "Brand": "BMW",
    "Model_Year": 2021,
    "Price": 48205.75,
    "Mileage": 174845,
    "Engine_Size": 4.6,
    "Horsepower": 155
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2019,
    "Price": 38790.55,
    "Mileage": 134789,
    "Engine_Size": 2.5,
    "Horsepower": 124
  },
  {
    "Brand": "Ford",
    "Model_Year": 2021,
    "Price": 45123.0,
    "Mileage": 112460,
    "Engine_Size": 1.8,
    "Horsepower": 270
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2017,
    "Price": 45832.85,
    "Mileage": 79723,
    "Engine_Size": 3.0,
    "Horsepower": 191
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2023,
    "Price": 53028.3,
    "Mileage": 109194,
    "Engine_Size": 4.0,
    "Horsepower": 177
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2009,
    "Price": 48565.15,
    "Mileage": 116417,
    "Engine_Size": 3.0,
    "Horsepower": 373
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2016,
    "Price": 46029.85,
    "Mileage": 140383,
    "Engine_Size": 2.9,
    "Horsepower": 201
  },
  {
    "Brand": "Ford",
    "Model_Year": 2005,
    "Price": 49116.6,
    "Mileage": 61888,
    "Engine_Size": 4.4,
    "Horsepower": 267
  },
  {
    "Brand": "Honda",
    "Model_Year": 2009,
    "Price": 37772.2,
    "Mileage": 46616,
    "Engine_Size": 2.4,
    "Horsepower": 116
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2012,
    "Price": 50185.7,
    "Mileage": 188206,
    "Engine_Size": 4.4,
    "Horsepower": 297
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2017,
    "Price": 53302.85,
    "Mileage": 11083,
    "Engine_Size": 2.6,
    "Horsepower": 314
  },
  {
    "Brand": "BMW",
    "Model_Year": 2012,
    "Price": 40004.5,
    "Mileage": 148670,
    "Engine_Size": 2.3,
    "Horsepower": 272
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2015,
    "Price": 50283.2,
    "Mileage": 87476,
    "Engine_Size": 2.8,
    "Horsepower": 330
  },
  {
    "Brand": "BMW",
    "Model_Year": 2005,
    "Price": 46869.2,
    "Mileage": 97416,
    "Engine_Size": 4.0,
    "Horsepower": 247
  },
  {
    "Brand": "Ford",
    "Model_Year": 2017,
    "Price": 39822.0,
    "Mileage": 7580,
    "Engine_Size": 1.5,
    "Horsepower": 93
  },
  {
    "Brand": "Honda",
    "Model_Year": 2023,
    "Price": 42507.3,
    "Mileage": 127834,
    "Engine_Size": 1.8,
    "Horsepower": 244
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2007,
    "Price": 56590.6,
    "Mileage": 117148,
    "Engine_Size": 4.8,
    "Horsepower": 343
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2021,
    "Price": 48179.65,
    "Mileage": 193467,
    "Engine_Size": 1.7,
    "Horsepower": 330
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2009,
    "Price": 56944.95,
    "Mileage": 47321,
    "Engine_Size": 3.3,
    "Horsepower": 355
  },
  {
    "Brand": "Ford",
    "Model_Year": 2012,
    "Price": 43739.7,
    "Mileage": 14386,
    "Engine_Size": 3.3,
    "Horsepower": 70
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2018,
    "Price": 43489.45,
    "Mileage": 58171,
    "Engine_Size": 3.0,
    "Horsepower": 155
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2008,
    "Price": 37088.3,
    "Mileage": 155594,
    "Engine_Size": 3.6,
    "Horsepower": 138
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2015,
    "Price": 35093.65,
    "Mileage": 150707,
    "Engine_Size": 1.9,
    "Horsepower": 100
  },
  {
    "Brand": "BMW",
    "Model_Year": 2019,
    "Price": 51035.85,
    "Mileage": 136743,
    "Engine_Size": 3.2,
    "Horsepower": 267
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2023,
    "Price": 53652.75,
    "Mileage": 38545,
    "Engine_Size": 2.5,
    "Horsepower": 160
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2011,
    "Price": 35402.45,
    "Mileage": 190151,
    "Engine_Size": 3.6,
    "Horsepower": 85
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2023,
    "Price": 53480.25,
    "Mileage": 31855,
    "Engine_Size": 1.6,
    "Horsepower": 379
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2023,
    "Price": 60679.5,
    "Mileage": 40790,
    "Engine_Size": 3.3,
    "Horsepower": 345
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2015,
    "Price": 39468.4,
    "Mileage": 56012,
    "Engine_Size": 1.7,
    "Horsepower": 231
  },
  {
    "Brand": "Ford",
    "Model_Year": 2009,
    "Price": 38002.65,
    "Mileage": 122827,
    "Engine_Size": 2.1,
    "Horsepower": 261
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2009,
    "Price": 41571.0,
    "Mileage": 19260,
    "Engine_Size": 1.9,
    "Horsepower": 220
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2012,
    "Price": 38018.3,
    "Mileage": 6074,
    "Engine_Size": 1.7,
    "Horsepower": 182
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2014,
    "Price": 57599.6,
    "Mileage": 178748,
    "Engine_Size": 4.3,
    "Horsepower": 342
  },
  {
    "Brand": "BMW",
    "Model_Year": 2010,
    "Price": 39703.65,
    "Mileage": 145547,
    "Engine_Size": 2.1,
    "Horsepower": 245
  },
  {
    "Brand": "BMW",
    "Model_Year": 2019,
    "Price": 55040.4,
    "Mileage": 151192,
    "Engine_Size": 4.7,
    "Horsepower": 218
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2020,
    "Price": 60238.05,
    "Mileage": 159219,
    "Engine_Size": 4.9,
    "Horsepower": 247
  },
  {
    "Brand": "Ford",
    "Model_Year": 2021,
    "Price": 62639.7,
    "Mileage": 6986,
    "Engine_Size": 3.3,
    "Horsepower": 292
  },
  {
    "Brand": "Ford",
    "Model_Year": 2012,
    "Price": 37623.9,
    "Mileage": 168502,
    "Engine_Size": 1.6,
    "Horsepower": 328
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2012,
    "Price": 45690.05,
    "Mileage": 60479,
    "Engine_Size": 2.5,
    "Horsepower": 342
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2013,
    "Price": 52299.35,
    "Mileage": 135833,
    "Engine_Size": 4.2,
    "Horsepower": 258
  },
  {
    "Brand": "BMW",
    "Model_Year": 2006,
    "Price": 48469.2,
    "Mileage": 7176,
    "Engine_Size": 2.5,
    "Horsepower": 375
  },
  {
    "Brand": "Ford",
    "Model_Year": 2019,
    "Price": 38805.1,
    "Mileage": 89258,
    "Engine_Size": 1.3,
    "Horsepower": 159
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2022,
    "Price": 56977.6,
    "Mileage": 120188,
    "Engine_Size": 3.2,
    "Horsepower": 331
  },
  {
    "Brand": "Ford",
    "Model_Year": 2007,
    "Price": 49063.35,
    "Mileage": 89153,
    "Engine_Size": 4.4,
    "Horsepower": 225
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2021,
    "Price": 51515.5,
    "Mileage": 197990,
    "Engine_Size": 4.2,
    "Horsepower": 269
  },
  {
    "Brand": "Ford",
    "Model_Year": 2008,
    "Price": 27938.65,
    "Mileage": 163187,
    "Engine_Size": 1.7,
    "Horsepower": 124
  },
  {
    "Brand": "BMW",
    "Model_Year": 2008,
    "Price": 49176.9,
    "Mileage": 82442,
    "Engine_Size": 3.7,
    "Horsepower": 323
  },
  {
    "Brand": "Honda",
    "Model_Year": 2018,
    "Price": 45163.9,
    "Mileage": 45002,
    "Engine_Size": 1.9,
    "Horsepower": 242
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2013,
    "Price": 41511.8,
    "Mileage": 62124,
    "Engine_Size": 1.9,
    "Horsepower": 269
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2013,
    "Price": 47419.9,
    "Mileage": 142682,
    "Engine_Size": 4.5,
    "Horsepower": 171
  },
  {
    "Brand": "BMW",
    "Model_Year": 2022,
    "Price": 57420.4,
    "Mileage": 54752,
    "Engine_Size": 2.0,
    "Horsepower": 354
  },
  {
    "Brand": "Ford",
    "Model_Year": 2014,
    "Price": 43160.65,
    "Mileage": 83947,
    "Engine_Size": 2.1,
    "Horsepower": 220
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2008,
    "Price": 26557.4,
    "Mileage": 123972,
    "Engine_Size": 1.0,
    "Horsepower": 180
  },
  {
    "Brand": "Ford",
    "Model_Year": 2016,
    "Price": 60480.2,
    "Mileage": 79716,
    "Engine_Size": 4.5,
    "Horsepower": 335
  },
  {
    "Brand": "BMW",
    "Model_Year": 2012,
    "Price": 44007.75,
    "Mileage": 184065,
    "Engine_Size": 4.2,
    "Horsepower": 160
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2006,
    "Price": 47780.35,
    "Mileage": 15073,
    "Engine_Size": 3.5,
    "Horsepower": 246
  },
  {
    "Brand": "Ford",
    "Model_Year": 2017,
    "Price": 60952.45,
    "Mileage": 42251,
    "Engine_Size": 4.0,
    "Horsepower": 300
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2020,
    "Price": 36028.2,
    "Mileage": 101496,
    "Engine_Size": 1.6,
    "Horsepower": 98
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2006,
    "Price": 49777.15,
    "Mileage": 43897,
    "Engine_Size": 2.8,
    "Horsepower": 370
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2015,
    "Price": 37919.1,
    "Mileage": 186978,
    "Engine_Size": 2.4,
    "Horsepower": 264
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2014,
    "Price": 46684.2,
    "Mileage": 56616,
    "Engine_Size": 1.4,
    "Horsepower": 376
  },
  {
    "Brand": "Honda",
    "Model_Year": 2019,
    "Price": 58188.9,
    "Mileage": 9482,
    "Engine_Size": 2.9,
    "Horsepower": 308
  },
  {
    "Brand": "Honda",
    "Model_Year": 2021,
    "Price": 67906.5,
    "Mileage": 112990,
    "Engine_Size": 4.7,
    "Horsepower": 336
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2012,
    "Price": 31431.7,
    "Mileage": 175646,
    "Engine_Size": 1.2,
    "Horsepower": 283
  },
  {
    "Brand": "Honda",
    "Model_Year": 2022,
    "Price": 47885.8,
    "Mileage": 48284,
    "Engine_Size": 2.2,
    "Horsepower": 151
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2013,
    "Price": 36005.4,
    "Mileage": 77932,
    "Engine_Size": 1.8,
    "Horsepower": 197
  },
  {
    "Brand": "BMW",
    "Model_Year": 2012,
    "Price": 47239.1,
    "Mileage": 12338,
    "Engine_Size": 2.0,
    "Horsepower": 331
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2018,
    "Price": 47885.5,
    "Mileage": 178790,
    "Engine_Size": 4.6,
    "Horsepower": 136
  },
  {
    "Brand": "BMW",
    "Model_Year": 2022,
    "Price": 47973.4,
    "Mileage": 148572,
    "Engine_Size": 2.9,
    "Horsepower": 131
  },
  {
    "Brand": "BMW",
    "Model_Year": 2016,
    "Price": 44804.15,
    "Mileage": 147617,
    "Engine_Size": 2.9,
    "Horsepower": 202
  },
  {
    "Brand": "Honda",
    "Model_Year": 2023,
    "Price": 55721.0,
    "Mileage": 66480,
    "Engine_Size": 4.0,
    "Horsepower": 206
  },
  {
    "Brand": "Ford",
    "Model_Year": 2018,
    "Price": 31527.35,
    "Mileage": 141313,
    "Engine_Size": 1.6,
    "Horsepower": 97
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2021,
    "Price": 52141.35,
    "Mileage": 158893,
    "Engine_Size": 2.9,
    "Horsepower": 280
  },
  {
    "Brand": "Honda",
    "Model_Year": 2007,
    "Price": 42850.25,
    "Mileage": 9695,
    "Engine_Size": 2.7,
    "Horsepower": 274
  },
  {
    "Brand": "Honda",
    "Model_Year": 2011,
    "Price": 53288.1,
    "Mileage": 19318,
    "Engine_Size": 3.4,
    "Horsepower": 322
  },
  {
    "Brand": "Ford",
    "Model_Year": 2021,
    "Price": 59895.3,
    "Mileage": 55934,
    "Engine_Size": 5.0,
    "Horsepower": 107
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2016,
    "Price": 48002.85,
    "Mileage": 158403,
    "Engine_Size": 4.1,
    "Horsepower": 112
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2013,
    "Price": 38367.9,
    "Mileage": 126282,
    "Engine_Size": 2.6,
    "Horsepower": 186
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2019,
    "Price": 50557.8,
    "Mileage": 188744,
    "Engine_Size": 4.3,
    "Horsepower": 259
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2022,
    "Price": 42696.45,
    "Mileage": 96891,
    "Engine_Size": 1.7,
    "Horsepower": 115
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2017,
    "Price": 42171.3,
    "Mileage": 73754,
    "Engine_Size": 1.1,
    "Horsepower": 235
  },
  {
    "Brand": "Honda",
    "Model_Year": 2012,
    "Price": 44292.15,
    "Mileage": 90677,
    "Engine_Size": 1.8,
    "Horsepower": 374
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2018,
    "Price": 44564.0,
    "Mileage": 107320,
    "Engine_Size": 2.4,
    "Horsepower": 272
  },
  {
    "Brand": "Honda",
    "Model_Year": 2012,
    "Price": 45510.55,
    "Mileage": 138909,
    "Engine_Size": 3.0,
    "Horsepower": 302
  },
  {
    "Brand": "BMW",
    "Model_Year": 2018,
    "Price": 53368.95,
    "Mileage": 130261,
    "Engine_Size": 3.5,
    "Horsepower": 314
  },
  {
    "Brand": "Honda",
    "Model_Year": 2011,
    "Price": 54129.1,
    "Mileage": 110338,
    "Engine_Size": 4.6,
    "Horsepower": 278
  },
  {
    "Brand": "Honda",
    "Model_Year": 2016,
    "Price": 57323.15,
    "Mileage": 45077,
    "Engine_Size": 3.0,
    "Horsepower": 317
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2015,
    "Price": 55336.25,
    "Mileage": 84915,
    "Engine_Size": 3.0,
    "Horsepower": 364
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2015,
    "Price": 44325.45,
    "Mileage": 140311,
    "Engine_Size": 1.2,
    "Horsepower": 396
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2017,
    "Price": 39632.55,
    "Mileage": 34669,
    "Engine_Size": 1.1,
    "Horsepower": 227
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2022,
    "Price": 49778.8,
    "Mileage": 53624,
    "Engine_Size": 3.2,
    "Horsepower": 70
  },
  {
    "Brand": "BMW",
    "Model_Year": 2006,
    "Price": 39685.65,
    "Mileage": 80147,
    "Engine_Size": 2.8,
    "Horsepower": 286
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2019,
    "Price": 60013.9,
    "Mileage": 140222,
    "Engine_Size": 4.4,
    "Horsepower": 318
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2022,
    "Price": 38765.95,
    "Mileage": 147181,
    "Engine_Size": 1.6,
    "Horsepower": 138
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2019,
    "Price": 33014.6,
    "Mileage": 162088,
    "Engine_Size": 1.1,
    "Horsepower": 99
  },
  {
    "Brand": "Ford",
    "Model_Year": 2023,
    "Price": 45422.6,
    "Mileage": 148008,
    "Engine_Size": 2.8,
    "Horsepower": 184
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2016,
    "Price": 30753.6,
    "Mileage": 147108,
    "Engine_Size": 1.9,
    "Horsepower": 77
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2017,
    "Price": 40999.6,
    "Mileage": 175308,
    "Engine_Size": 1.2,
    "Horsepower": 344
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2015,
    "Price": 60254.35,
    "Mileage": 150093,
    "Engine_Size": 3.9,
    "Horsepower": 384
  },
  {
    "Brand": "Ford",
    "Model_Year": 2009,
    "Price": 33344.85,
    "Mileage": 41943,
    "Engine_Size": 1.4,
    "Horsepower": 105
  },
  {
    "Brand": "Ford",
    "Model_Year": 2005,
    "Price": 50519.3,
    "Mileage": 118694,
    "Engine_Size": 3.4,
    "Horsepower": 380
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2007,
    "Price": 27123.6,
    "Mileage": 186088,
    "Engine_Size": 2.1,
    "Horsepower": 113
  },
  {
    "Brand": "Ford",
    "Model_Year": 2023,
    "Price": 45446.2,
    "Mileage": 159316,
    "Engine_Size": 1.7,
    "Horsepower": 224
  },
  {
    "Brand": "BMW",
    "Model_Year": 2011,
    "Price": 28267.050000000003,
    "Mileage": 199099,
    "Engine_Size": 2.5,
    "Horsepower": 146
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2016,
    "Price": 50180.45,
    "Mileage": 128351,
    "Engine_Size": 4.2,
    "Horsepower": 147
  },
  {
    "Brand": "Ford",
    "Model_Year": 2019,
    "Price": 49287.75,
    "Mileage": 43985,
    "Engine_Size": 2.6,
    "Horsepower": 170
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2009,
    "Price": 39997.3,
    "Mileage": 137574,
    "Engine_Size": 4.0,
    "Horsepower": 99
  },
  {
    "Brand": "BMW",
    "Model_Year": 2019,
    "Price": 37530.2,
    "Mileage": 58836,
    "Engine_Size": 1.5,
    "Horsepower": 108
  },
  {
    "Brand": "Honda",
    "Model_Year": 2012,
    "Price": 52212.3,
    "Mileage": 104714,
    "Engine_Size": 4.1,
    "Horsepower": 308
  },
  {
    "Brand": "Honda",
    "Model_Year": 2014,
    "Price": 38660.5,
    "Mileage": 8770,
    "Engine_Size": 1.9,
    "Horsepower": 82
  },
  {
    "Brand": "BMW",
    "Model_Year": 2020,
    "Price": 52824.75,
    "Mileage": 47865,
    "Engine_Size": 3.7,
    "Horsepower": 191
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2012,
    "Price": 48558.45,
    "Mileage": 58811,
    "Engine_Size": 3.3,
    "Horsepower": 213
  },
  {
    "Brand": "BMW",
    "Model_Year": 2005,
    "Price": 49490.95,
    "Mileage": 9001,
    "Engine_Size": 4.7,
    "Horsepower": 241
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2016,
    "Price": 51616.6,
    "Mileage": 65848,
    "Engine_Size": 2.5,
    "Horsepower": 316
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2009,
    "Price": 41025.25,
    "Mileage": 57635,
    "Engine_Size": 1.3,
    "Horsepower": 316
  },
  {
    "Brand": "Honda",
    "Model_Year": 2007,
    "Price": 31366.7,
    "Mileage": 25946,
    "Engine_Size": 1.1,
    "Horsepower": 114
  },
  {
    "Brand": "Ford",
    "Model_Year": 2005,
    "Price": 52449.4,
    "Mileage": 100852,
    "Engine_Size": 4.3,
    "Horsepower": 322
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2008,
    "Price": 49121.85,
    "Mileage": 96103,
    "Engine_Size": 3.1,
    "Horsepower": 360
  },
  {
    "Brand": "Honda",
    "Model_Year": 2012,
    "Price": 57722.8,
    "Mileage": 48744,
    "Engine_Size": 4.1,
    "Horsepower": 276
  },
  {
    "Brand": "Ford",
    "Model_Year": 2007,
    "Price": 26591.55,
    "Mileage": 122729,
    "Engine_Size": 1.9,
    "Horsepower": 76
  },
  {
    "Brand": "Ford",
    "Model_Year": 2014,
    "Price": 40568.45,
    "Mileage": 175231,
    "Engine_Size": 2.4,
    "Horsepower": 311
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2006,
    "Price": 27636.45,
    "Mileage": 28671,
    "Engine_Size": 1.1,
    "Horsepower": 179
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2015,
    "Price": 48770.9,
    "Mileage": 152522,
    "Engine_Size": 4.8,
    "Horsepower": 183
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2014,
    "Price": 51074.0,
    "Mileage": 150980,
    "Engine_Size": 3.7,
    "Horsepower": 376
  },
  {
    "Brand": "BMW",
    "Model_Year": 2018,
    "Price": 62221.65,
    "Mileage": 193347,
    "Engine_Size": 4.7,
    "Horsepower": 371
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2011,
    "Price": 40402.5,
    "Mileage": 180430,
    "Engine_Size": 2.1,
    "Horsepower": 345
  },
  {
    "Brand": "Ford",
    "Model_Year": 2006,
    "Price": 32317.050000000003,
    "Mileage": 185119,
    "Engine_Size": 3.4,
    "Horsepower": 165
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2013,
    "Price": 52593.5,
    "Mileage": 171590,
    "Engine_Size": 3.7,
    "Horsepower": 363
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2020,
    "Price": 52483.35,
    "Mileage": 62813,
    "Engine_Size": 2.3,
    "Horsepower": 258
  },
  {
    "Brand": "Ford",
    "Model_Year": 2017,
    "Price": 65616.6,
    "Mileage": 101748,
    "Engine_Size": 4.4,
    "Horsepower": 357
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2013,
    "Price": 52604.1,
    "Mileage": 142878,
    "Engine_Size": 4.8,
    "Horsepower": 223
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2008,
    "Price": 41548.35,
    "Mileage": 109733,
    "Engine_Size": 4.5,
    "Horsepower": 127
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2014,
    "Price": 40419.85,
    "Mileage": 176963,
    "Engine_Size": 4.0,
    "Horsepower": 119
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2016,
    "Price": 42716.75,
    "Mileage": 131865,
    "Engine_Size": 2.1,
    "Horsepower": 276
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2021,
    "Price": 41948.45,
    "Mileage": 88551,
    "Engine_Size": 2.1,
    "Horsepower": 121
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2018,
    "Price": 57537.25,
    "Mileage": 134335,
    "Engine_Size": 4.9,
    "Horsepower": 219
  },
  {
    "Brand": "Honda",
    "Model_Year": 2018,
    "Price": 36406.0,
    "Mileage": 44220,
    "Engine_Size": 1.0,
    "Horsepower": 122
  },
  {
    "Brand": "Ford",
    "Model_Year": 2006,
    "Price": 51553.1,
    "Mileage": 22158,
    "Engine_Size": 3.9,
    "Horsepower": 282
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2015,
    "Price": 47879.4,
    "Mileage": 85992,
    "Engine_Size": 3.8,
    "Horsepower": 135
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2020,
    "Price": 54963.0,
    "Mileage": 163660,
    "Engine_Size": 3.5,
    "Horsepower": 301
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2023,
    "Price": 67918.2,
    "Mileage": 67576,
    "Engine_Size": 5.0,
    "Horsepower": 368
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2010,
    "Price": 38877.65,
    "Mileage": 93027,
    "Engine_Size": 2.2,
    "Horsepower": 220
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2023,
    "Price": 50892.0,
    "Mileage": 160260,
    "Engine_Size": 2.4,
    "Horsepower": 274
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2009,
    "Price": 44890.5,
    "Mileage": 63830,
    "Engine_Size": 1.3,
    "Horsepower": 389
  },
  {
    "Brand": "BMW",
    "Model_Year": 2008,
    "Price": 42288.45,
    "Mileage": 140091,
    "Engine_Size": 2.8,
    "Horsepower": 324
  },
  {
    "Brand": "Ford",
    "Model_Year": 2019,
    "Price": 48387.05,
    "Mileage": 17419,
    "Engine_Size": 2.0,
    "Horsepower": 206
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2008,
    "Price": 39389.15,
    "Mileage": 38697,
    "Engine_Size": 2.4,
    "Horsepower": 204
  },
  {
    "Brand": "Ford",
    "Model_Year": 2014,
    "Price": 44728.4,
    "Mileage": 89932,
    "Engine_Size": 4.3,
    "Horsepower": 123
  },
  {
    "Brand": "BMW",
    "Model_Year": 2007,
    "Price": 44962.4,
    "Mileage": 124712,
    "Engine_Size": 4.7,
    "Horsepower": 134
  },
  {
    "Brand": "BMW",
    "Model_Year": 2009,
    "Price": 26680.6,
    "Mileage": 100428,
    "Engine_Size": 1.7,
    "Horsepower": 71
  },
  {
    "Brand": "Ford",
    "Model_Year": 2010,
    "Price": 39206.75,
    "Mileage": 144045,
    "Engine_Size": 2.5,
    "Horsepower": 201
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2012,
    "Price": 47253.55,
    "Mileage": 91649,
    "Engine_Size": 4.7,
    "Horsepower": 101
  },
  {
    "Brand": "Honda",
    "Model_Year": 2011,
    "Price": 40820.55,
    "Mileage": 127649,
    "Engine_Size": 1.2,
    "Horsepower": 312
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2014,
    "Price": 44455.2,
    "Mileage": 16136,
    "Engine_Size": 1.4,
    "Horsepower": 261
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2010,
    "Price": 34819.05,
    "Mileage": 89739,
    "Engine_Size": 1.7,
    "Horsepower": 211
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2018,
    "Price": 54368.9,
    "Mileage": 67502,
    "Engine_Size": 3.4,
    "Horsepower": 217
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2008,
    "Price": 26532.15,
    "Mileage": 167357,
    "Engine_Size": 1.6,
    "Horsepower": 158
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2017,
    "Price": 52648.05,
    "Mileage": 28039,
    "Engine_Size": 4.9,
    "Horsepower": 118
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2021,
    "Price": 49058.0,
    "Mileage": 71720,
    "Engine_Size": 2.8,
    "Horsepower": 205
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2011,
    "Price": 44304.6,
    "Mileage": 128168,
    "Engine_Size": 3.0,
    "Horsepower": 260
  },
  {
    "Brand": "BMW",
    "Model_Year": 2008,
    "Price": 39367.85,
    "Mileage": 93263,
    "Engine_Size": 2.0,
    "Horsepower": 218
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2018,
    "Price": 47365.25,
    "Mileage": 64155,
    "Engine_Size": 2.9,
    "Horsepower": 156
  },
  {
    "Brand": "BMW",
    "Model_Year": 2007,
    "Price": 41790.45,
    "Mileage": 21911,
    "Engine_Size": 3.6,
    "Horsepower": 77
  },
  {
    "Brand": "Ford",
    "Model_Year": 2009,
    "Price": 53576.2,
    "Mileage": 5916,
    "Engine_Size": 4.0,
    "Horsepower": 292
  },
  {
    "Brand": "Honda",
    "Model_Year": 2020,
    "Price": 53795.4,
    "Mileage": 64052,
    "Engine_Size": 4.0,
    "Horsepower": 85
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2008,
    "Price": 54247.5,
    "Mileage": 22790,
    "Engine_Size": 3.3,
    "Horsepower": 365
  },
  {
    "Brand": "Ford",
    "Model_Year": 2006,
    "Price": 41962.1,
    "Mileage": 141278,
    "Engine_Size": 4.6,
    "Horsepower": 175
  },
  {
    "Brand": "Ford",
    "Model_Year": 2022,
    "Price": 65223.15,
    "Mileage": 126937,
    "Engine_Size": 4.3,
    "Horsepower": 352
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2023,
    "Price": 54567.35,
    "Mileage": 90053,
    "Engine_Size": 4.0,
    "Horsepower": 173
  },
  {
    "Brand": "Honda",
    "Model_Year": 2023,
    "Price": 44066.5,
    "Mileage": 54950,
    "Engine_Size": 1.2,
    "Horsepower": 215
  },
  {
    "Brand": "Ford",
    "Model_Year": 2021,
    "Price": 37431.45,
    "Mileage": 121211,
    "Engine_Size": 1.0,
    "Horsepower": 104
  },
  {
    "Brand": "Ford",
    "Model_Year": 2018,
    "Price": 42161.95,
    "Mileage": 61361,
    "Engine_Size": 1.8,
    "Horsepower": 182
  },
  {
    "Brand": "Honda",
    "Model_Year": 2023,
    "Price": 63822.45,
    "Mileage": 66451,
    "Engine_Size": 3.7,
    "Horsepower": 377
  },
  {
    "Brand": "Honda",
    "Model_Year": 2017,
    "Price": 45462.2,
    "Mileage": 42696,
    "Engine_Size": 2.6,
    "Horsepower": 122
  },
  {
    "Brand": "Ford",
    "Model_Year": 2016,
    "Price": 45146.25,
    "Mileage": 107395,
    "Engine_Size": 2.6,
    "Horsepower": 150
  },
  {
    "Brand": "Honda",
    "Model_Year": 2010,
    "Price": 48317.95,
    "Mileage": 129121,
    "Engine_Size": 4.5,
    "Horsepower": 173
  },
  {
    "Brand": "Ford",
    "Model_Year": 2008,
    "Price": 63143.6,
    "Mileage": 51728,
    "Engine_Size": 4.6,
    "Horsepower": 391
  },
  {
    "Brand": "Ford",
    "Model_Year": 2023,
    "Price": 69974.95,
    "Mileage": 60401,
    "Engine_Size": 4.6,
    "Horsepower": 311
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2020,
    "Price": 43654.85,
    "Mileage": 30103,
    "Engine_Size": 2.3,
    "Horsepower": 100
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2017,
    "Price": 56616.25,
    "Mileage": 170335,
    "Engine_Size": 3.8,
    "Horsepower": 386
  },
  {
    "Brand": "Ford",
    "Model_Year": 2008,
    "Price": 40519.8,
    "Mileage": 55044,
    "Engine_Size": 2.1,
    "Horsepower": 261
  },
  {
    "Brand": "BMW",
    "Model_Year": 2021,
    "Price": 51960.5,
    "Mileage": 62730,
    "Engine_Size": 1.8,
    "Horsepower": 302
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2005,
    "Price": 33526.75,
    "Mileage": 30825,
    "Engine_Size": 1.7,
    "Horsepower": 167
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2022,
    "Price": 46737.45,
    "Mileage": 42271,
    "Engine_Size": 2.4,
    "Horsepower": 103
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2021,
    "Price": 54093.2,
    "Mileage": 82256,
    "Engine_Size": 2.7,
    "Horsepower": 312
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2019,
    "Price": 46596.8,
    "Mileage": 182804,
    "Engine_Size": 4.3,
    "Horsepower": 128
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2015,
    "Price": 43468.35,
    "Mileage": 71433,
    "Engine_Size": 1.5,
    "Horsepower": 328
  },
  {
    "Brand": "Ford",
    "Model_Year": 2017,
    "Price": 44665.05,
    "Mileage": 106999,
    "Engine_Size": 3.9,
    "Horsepower": 86
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2005,
    "Price": 41073.4,
    "Mileage": 28572,
    "Engine_Size": 3.1,
    "Horsepower": 147
  },
  {
    "Brand": "Ford",
    "Model_Year": 2021,
    "Price": 52581.7,
    "Mileage": 43546,
    "Engine_Size": 2.2,
    "Horsepower": 275
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2010,
    "Price": 46554.9,
    "Mileage": 151222,
    "Engine_Size": 3.0,
    "Horsepower": 371
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2008,
    "Price": 37167.75,
    "Mileage": 59165,
    "Engine_Size": 2.2,
    "Horsepower": 235
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2020,
    "Price": 61361.5,
    "Mileage": 68690,
    "Engine_Size": 3.4,
    "Horsepower": 360
  },
  {
    "Brand": "BMW",
    "Model_Year": 2019,
    "Price": 41579.2,
    "Mileage": 189736,
    "Engine_Size": 2.7,
    "Horsepower": 181
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2019,
    "Price": 52241.6,
    "Mileage": 41948,
    "Engine_Size": 1.7,
    "Horsepower": 386
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2010,
    "Price": 30900.9,
    "Mileage": 173102,
    "Engine_Size": 1.5,
    "Horsepower": 214
  },
  {
    "Brand": "Honda",
    "Model_Year": 2019,
    "Price": 52945.65,
    "Mileage": 32007,
    "Engine_Size": 3.2,
    "Horsepower": 225
  },
  {
    "Brand": "BMW",
    "Model_Year": 2018,
    "Price": 60584.05,
    "Mileage": 105819,
    "Engine_Size": 4.6,
    "Horsepower": 247
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2015,
    "Price": 41817.65,
    "Mileage": 96207,
    "Engine_Size": 2.4,
    "Horsepower": 205
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2011,
    "Price": 55876.4,
    "Mileage": 81772,
    "Engine_Size": 3.9,
    "Horsepower": 384
  },
  {
    "Brand": "Honda",
    "Model_Year": 2013,
    "Price": 43669.8,
    "Mileage": 27024,
    "Engine_Size": 3.6,
    "Horsepower": 87
  },
  {
    "Brand": "Honda",
    "Model_Year": 2020,
    "Price": 53973.2,
    "Mileage": 175456,
    "Engine_Size": 4.7,
    "Horsepower": 224
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2009,
    "Price": 51361.4,
    "Mileage": 87912,
    "Engine_Size": 4.3,
    "Horsepower": 341
  },
  {
    "Brand": "Honda",
    "Model_Year": 2014,
    "Price": 46847.55,
    "Mileage": 154229,
    "Engine_Size": 3.3,
    "Horsepower": 335
  },
  {
    "Brand": "BMW",
    "Model_Year": 2022,
    "Price": 48096.95,
    "Mileage": 90481,
    "Engine_Size": 3.6,
    "Horsepower": 85
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2007,
    "Price": 41855.35,
    "Mileage": 93553,
    "Engine_Size": 4.6,
    "Horsepower": 81
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2017,
    "Price": 41508.6,
    "Mileage": 137828,
    "Engine_Size": 2.6,
    "Horsepower": 144
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2015,
    "Price": 48693.6,
    "Mileage": 107488,
    "Engine_Size": 2.3,
    "Horsepower": 281
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2021,
    "Price": 41355.95,
    "Mileage": 101741,
    "Engine_Size": 1.0,
    "Horsepower": 248
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2017,
    "Price": 47298.85,
    "Mileage": 194123,
    "Engine_Size": 4.3,
    "Horsepower": 198
  },
  {
    "Brand": "Honda",
    "Model_Year": 2010,
    "Price": 58232.5,
    "Mileage": 83210,
    "Engine_Size": 4.2,
    "Horsepower": 352
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2021,
    "Price": 37346.7,
    "Mileage": 179166,
    "Engine_Size": 1.4,
    "Horsepower": 264
  },
  {
    "Brand": "BMW",
    "Model_Year": 2017,
    "Price": 56620.65,
    "Mileage": 140607,
    "Engine_Size": 3.3,
    "Horsepower": 337
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2023,
    "Price": 46071.65,
    "Mileage": 192107,
    "Engine_Size": 2.9,
    "Horsepower": 99
  },
  {
    "Brand": "Honda",
    "Model_Year": 2023,
    "Price": 37139.65,
    "Mileage": 52367,
    "Engine_Size": 1.5,
    "Horsepower": 78
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2014,
    "Price": 56893.5,
    "Mileage": 153190,
    "Engine_Size": 4.9,
    "Horsepower": 378
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2007,
    "Price": 39525.8,
    "Mileage": 195884,
    "Engine_Size": 1.9,
    "Horsepower": 379
  },
  {
    "Brand": "BMW",
    "Model_Year": 2018,
    "Price": 43023.8,
    "Mileage": 64884,
    "Engine_Size": 1.3,
    "Horsepower": 234
  },
  {
    "Brand": "BMW",
    "Model_Year": 2023,
    "Price": 53570.4,
    "Mileage": 149352,
    "Engine_Size": 3.4,
    "Horsepower": 262
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2009,
    "Price": 50036.1,
    "Mileage": 150818,
    "Engine_Size": 4.0,
    "Horsepower": 374
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2009,
    "Price": 37401.4,
    "Mileage": 107572,
    "Engine_Size": 1.1,
    "Horsepower": 329
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2021,
    "Price": 56728.45,
    "Mileage": 58251,
    "Engine_Size": 3.6,
    "Horsepower": 261
  },
  {
    "Brand": "Honda",
    "Model_Year": 2014,
    "Price": 41211.95,
    "Mileage": 89821,
    "Engine_Size": 3.1,
    "Horsepower": 148
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2009,
    "Price": 36141.85,
    "Mileage": 88583,
    "Engine_Size": 1.4,
    "Horsepower": 248
  },
  {
    "Brand": "BMW",
    "Model_Year": 2008,
    "Price": 31205.65,
    "Mileage": 15207,
    "Engine_Size": 1.7,
    "Horsepower": 160
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2010,
    "Price": 51337.15,
    "Mileage": 32757,
    "Engine_Size": 3.3,
    "Horsepower": 284
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2008,
    "Price": 27019.1,
    "Mileage": 152298,
    "Engine_Size": 2.2,
    "Horsepower": 148
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2011,
    "Price": 43731.05,
    "Mileage": 197479,
    "Engine_Size": 4.8,
    "Horsepower": 172
  },
  {
    "Brand": "Ford",
    "Model_Year": 2011,
    "Price": 44969.1,
    "Mileage": 163278,
    "Engine_Size": 4.3,
    "Horsepower": 180
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2022,
    "Price": 66683.6,
    "Mileage": 156328,
    "Engine_Size": 4.9,
    "Horsepower": 383
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2007,
    "Price": 40172.9,
    "Mileage": 38822,
    "Engine_Size": 2.0,
    "Horsepower": 316
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2005,
    "Price": 53865.0,
    "Mileage": 46340,
    "Engine_Size": 4.9,
    "Horsepower": 303
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2008,
    "Price": 32725.7,
    "Mileage": 188306,
    "Engine_Size": 2.7,
    "Horsepower": 151
  },
  {
    "Brand": "BMW",
    "Model_Year": 2010,
    "Price": 40777.45,
    "Mileage": 48351,
    "Engine_Size": 2.4,
    "Horsepower": 201
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2013,
    "Price": 38154.45,
    "Mileage": 111311,
    "Engine_Size": 1.2,
    "Horsepower": 304
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2018,
    "Price": 44098.85,
    "Mileage": 184743,
    "Engine_Size": 1.2,
    "Horsepower": 347
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2016,
    "Price": 47891.0,
    "Mileage": 80320,
    "Engine_Size": 3.8,
    "Horsepower": 168
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2008,
    "Price": 32549.75,
    "Mileage": 107565,
    "Engine_Size": 2.8,
    "Horsepower": 107
  },
  {
    "Brand": "Honda",
    "Model_Year": 2016,
    "Price": 41405.55,
    "Mileage": 171229,
    "Engine_Size": 1.9,
    "Horsepower": 230
  },
  {
    "Brand": "Honda",
    "Model_Year": 2014,
    "Price": 50944.15,
    "Mileage": 24937,
    "Engine_Size": 3.5,
    "Horsepower": 186
  },
  {
    "Brand": "BMW",
    "Model_Year": 2011,
    "Price": 34893.9,
    "Mileage": 190362,
    "Engine_Size": 2.0,
    "Horsepower": 310
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2007,
    "Price": 30467.050000000003,
    "Mileage": 182779,
    "Engine_Size": 3.3,
    "Horsepower": 95
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2018,
    "Price": 45735.05,
    "Mileage": 16219,
    "Engine_Size": 2.4,
    "Horsepower": 205
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2014,
    "Price": 52798.05,
    "Mileage": 14399,
    "Engine_Size": 4.3,
    "Horsepower": 119
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2020,
    "Price": 61221.35,
    "Mileage": 131733,
    "Engine_Size": 4.3,
    "Horsepower": 363
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2020,
    "Price": 50448.55,
    "Mileage": 163729,
    "Engine_Size": 2.9,
    "Horsepower": 367
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2014,
    "Price": 52850.65,
    "Mileage": 25047,
    "Engine_Size": 2.4,
    "Horsepower": 362
  },
  {
    "Brand": "BMW",
    "Model_Year": 2017,
    "Price": 43554.35,
    "Mileage": 90693,
    "Engine_Size": 2.5,
    "Horsepower": 223
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2010,
    "Price": 50321.45,
    "Mileage": 105931,
    "Engine_Size": 4.2,
    "Horsepower": 289
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2016,
    "Price": 38999.85,
    "Mileage": 180963,
    "Engine_Size": 2.3,
    "Horsepower": 209
  },
  {
    "Brand": "Ford",
    "Model_Year": 2013,
    "Price": 32235.4,
    "Mileage": 142852,
    "Engine_Size": 1.8,
    "Horsepower": 118
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2017,
    "Price": 39589.5,
    "Mileage": 32050,
    "Engine_Size": 1.3,
    "Horsepower": 211
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2008,
    "Price": 38930.45,
    "Mileage": 78551,
    "Engine_Size": 2.9,
    "Horsepower": 115
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2015,
    "Price": 47770.7,
    "Mileage": 73666,
    "Engine_Size": 2.9,
    "Horsepower": 232
  },
  {
    "Brand": "Honda",
    "Model_Year": 2022,
    "Price": 64103.2,
    "Mileage": 87016,
    "Engine_Size": 4.4,
    "Horsepower": 354
  },
  {
    "Brand": "Ford",
    "Model_Year": 2015,
    "Price": 45017.25,
    "Mileage": 118135,
    "Engine_Size": 1.9,
    "Horsepower": 337
  },
  {
    "Brand": "Honda",
    "Model_Year": 2008,
    "Price": 39287.5,
    "Mileage": 58010,
    "Engine_Size": 2.5,
    "Horsepower": 185
  },
  {
    "Brand": "Honda",
    "Model_Year": 2022,
    "Price": 55372.75,
    "Mileage": 43165,
    "Engine_Size": 4.2,
    "Horsepower": 151
  },
  {
    "Brand": "Honda",
    "Model_Year": 2005,
    "Price": 46225.6,
    "Mileage": 16528,
    "Engine_Size": 4.3,
    "Horsepower": 113
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2011,
    "Price": 41380.0,
    "Mileage": 125840,
    "Engine_Size": 2.5,
    "Horsepower": 263
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2010,
    "Price": 42540.0,
    "Mileage": 185680,
    "Engine_Size": 2.8,
    "Horsepower": 327
  },
  {
    "Brand": "BMW",
    "Model_Year": 2019,
    "Price": 46701.7,
    "Mileage": 141986,
    "Engine_Size": 2.2,
    "Horsepower": 342
  },
  {
    "Brand": "BMW",
    "Model_Year": 2022,
    "Price": 66001.2,
    "Mileage": 42136,
    "Engine_Size": 4.7,
    "Horsepower": 343
  },
  {
    "Brand": "Honda",
    "Model_Year": 2015,
    "Price": 42061.45,
    "Mileage": 147251,
    "Engine_Size": 1.5,
    "Horsepower": 347
  },
  {
    "Brand": "Ford",
    "Model_Year": 2019,
    "Price": 54478.6,
    "Mileage": 91008,
    "Engine_Size": 4.7,
    "Horsepower": 152
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2020,
    "Price": 51961.2,
    "Mileage": 17076,
    "Engine_Size": 3.7,
    "Horsepower": 127
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2011,
    "Price": 39145.45,
    "Mileage": 128911,
    "Engine_Size": 3.1,
    "Horsepower": 122
  },
  {
    "Brand": "Ford",
    "Model_Year": 2014,
    "Price": 22753.25,
    "Mileage": 160855,
    "Engine_Size": 1.1,
    "Horsepower": 70
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2016,
    "Price": 46029.75,
    "Mileage": 121625,
    "Engine_Size": 2.9,
    "Horsepower": 285
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2018,
    "Price": 51082.6,
    "Mileage": 182788,
    "Engine_Size": 2.6,
    "Horsepower": 386
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2009,
    "Price": 38884.1,
    "Mileage": 55298,
    "Engine_Size": 1.6,
    "Horsepower": 297
  },
  {
    "Brand": "BMW",
    "Model_Year": 2022,
    "Price": 61175.8,
    "Mileage": 59304,
    "Engine_Size": 3.6,
    "Horsepower": 323
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2009,
    "Price": 53557.0,
    "Mileage": 84360,
    "Engine_Size": 4.9,
    "Horsepower": 228
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2007,
    "Price": 49841.25,
    "Mileage": 74835,
    "Engine_Size": 3.2,
    "Horsepower": 356
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2009,
    "Price": 39854.8,
    "Mileage": 117424,
    "Engine_Size": 3.9,
    "Horsepower": 135
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2021,
    "Price": 48872.5,
    "Mileage": 144190,
    "Engine_Size": 1.3,
    "Horsepower": 378
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2023,
    "Price": 49608.45,
    "Mileage": 61911,
    "Engine_Size": 2.7,
    "Horsepower": 164
  },
  {
    "Brand": "Honda",
    "Model_Year": 2023,
    "Price": 50673.6,
    "Mileage": 108088,
    "Engine_Size": 1.5,
    "Horsepower": 322
  },
  {
    "Brand": "BMW",
    "Model_Year": 2016,
    "Price": 54582.75,
    "Mileage": 20185,
    "Engine_Size": 3.5,
    "Horsepower": 219
  },
  {
    "Brand": "BMW",
    "Model_Year": 2013,
    "Price": 45612.8,
    "Mileage": 177864,
    "Engine_Size": 4.8,
    "Horsepower": 92
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2005,
    "Price": 47946.35,
    "Mileage": 55613,
    "Engine_Size": 3.6,
    "Horsepower": 313
  },
  {
    "Brand": "Ford",
    "Model_Year": 2022,
    "Price": 43968.05,
    "Mileage": 169999,
    "Engine_Size": 1.3,
    "Horsepower": 284
  },
  {
    "Brand": "Honda",
    "Model_Year": 2008,
    "Price": 38250.7,
    "Mileage": 5386,
    "Engine_Size": 2.4,
    "Horsepower": 200
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2014,
    "Price": 52067.0,
    "Mileage": 35020,
    "Engine_Size": 3.2,
    "Horsepower": 217
  },
  {
    "Brand": "Honda",
    "Model_Year": 2011,
    "Price": 43781.1,
    "Mileage": 47678,
    "Engine_Size": 2.6,
    "Horsepower": 178
  },
  {
    "Brand": "Honda",
    "Model_Year": 2005,
    "Price": 39153.3,
    "Mileage": 66394,
    "Engine_Size": 4.3,
    "Horsepower": 109
  },
  {
    "Brand": "Honda",
    "Model_Year": 2021,
    "Price": 57200.15,
    "Mileage": 120377,
    "Engine_Size": 4.3,
    "Horsepower": 190
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2006,
    "Price": 49034.2,
    "Mileage": 126716,
    "Engine_Size": 3.4,
    "Horsepower": 364
  },
  {
    "Brand": "BMW",
    "Model_Year": 2015,
    "Price": 37707.7,
    "Mileage": 192486,
    "Engine_Size": 2.5,
    "Horsepower": 189
  },
  {
    "Brand": "BMW",
    "Model_Year": 2013,
    "Price": 27113.6,
    "Mileage": 190888,
    "Engine_Size": 2.0,
    "Horsepower": 87
  },
  {
    "Brand": "Honda",
    "Model_Year": 2011,
    "Price": 40174.1,
    "Mileage": 60918,
    "Engine_Size": 1.4,
    "Horsepower": 238
  },
  {
    "Brand": "Ford",
    "Model_Year": 2021,
    "Price": 51425.0,
    "Mileage": 120640,
    "Engine_Size": 2.4,
    "Horsepower": 267
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2021,
    "Price": 44457.7,
    "Mileage": 198766,
    "Engine_Size": 2.7,
    "Horsepower": 212
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2006,
    "Price": 34073.65,
    "Mileage": 165527,
    "Engine_Size": 3.7,
    "Horsepower": 106
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2010,
    "Price": 47382.7,
    "Mileage": 109446,
    "Engine_Size": 3.6,
    "Horsepower": 255
  },
  {
    "Brand": "Ford",
    "Model_Year": 2018,
    "Price": 41156.65,
    "Mileage": 174807,
    "Engine_Size": 1.3,
    "Horsepower": 330
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2010,
    "Price": 45601.9,
    "Mileage": 99702,
    "Engine_Size": 2.6,
    "Horsepower": 300
  },
  {
    "Brand": "Honda",
    "Model_Year": 2006,
    "Price": 38371.55,
    "Mileage": 110509,
    "Engine_Size": 1.7,
    "Horsepower": 323
  },
  {
    "Brand": "BMW",
    "Model_Year": 2005,
    "Price": 41162.6,
    "Mileage": 98608,
    "Engine_Size": 1.6,
    "Horsepower": 398
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2014,
    "Price": 59447.5,
    "Mileage": 119310,
    "Engine_Size": 4.3,
    "Horsepower": 366
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2009,
    "Price": 25540.95,
    "Mileage": 148181,
    "Engine_Size": 1.2,
    "Horsepower": 79
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2006,
    "Price": 47871.9,
    "Mileage": 50802,
    "Engine_Size": 2.7,
    "Horsepower": 393
  },
  {
    "Brand": "Ford",
    "Model_Year": 2020,
    "Price": 51228.9,
    "Mileage": 39622,
    "Engine_Size": 1.7,
    "Horsepower": 299
  },
  {
    "Brand": "Honda",
    "Model_Year": 2006,
    "Price": 40660.25,
    "Mileage": 114935,
    "Engine_Size": 4.5,
    "Horsepower": 93
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2014,
    "Price": 38676.05,
    "Mileage": 122919,
    "Engine_Size": 3.2,
    "Horsepower": 147
  },
  {
    "Brand": "Honda",
    "Model_Year": 2006,
    "Price": 31616.550000000003,
    "Mileage": 138669,
    "Engine_Size": 1.9,
    "Horsepower": 262
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2020,
    "Price": 48273.55,
    "Mileage": 176669,
    "Engine_Size": 3.0,
    "Horsepower": 178
  },
  {
    "Brand": "Ford",
    "Model_Year": 2020,
    "Price": 57487.7,
    "Mileage": 177026,
    "Engine_Size": 3.9,
    "Horsepower": 349
  },
  {
    "Brand": "Ford",
    "Model_Year": 2023,
    "Price": 66292.05,
    "Mileage": 74519,
    "Engine_Size": 4.8,
    "Horsepower": 332
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2011,
    "Price": 40206.65,
    "Mileage": 192187,
    "Engine_Size": 1.9,
    "Horsepower": 398
  },
  {
    "Brand": "Honda",
    "Model_Year": 2016,
    "Price": 57366.85,
    "Mileage": 179223,
    "Engine_Size": 4.5,
    "Horsepower": 337
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2019,
    "Price": 63021.4,
    "Mileage": 153112,
    "Engine_Size": 4.7,
    "Horsepower": 328
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2012,
    "Price": 51392.4,
    "Mileage": 49772,
    "Engine_Size": 4.7,
    "Horsepower": 154
  },
  {
    "Brand": "Honda",
    "Model_Year": 2010,
    "Price": 34489.45,
    "Mileage": 127431,
    "Engine_Size": 3.5,
    "Horsepower": 79
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2014,
    "Price": 51286.5,
    "Mileage": 101090,
    "Engine_Size": 3.5,
    "Horsepower": 358
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2007,
    "Price": 40825.8,
    "Mileage": 199904,
    "Engine_Size": 2.6,
    "Horsepower": 371
  },
  {
    "Brand": "BMW",
    "Model_Year": 2023,
    "Price": 49379.6,
    "Mileage": 163988,
    "Engine_Size": 4.0,
    "Horsepower": 128
  },
  {
    "Brand": "BMW",
    "Model_Year": 2021,
    "Price": 60280.45,
    "Mileage": 49871,
    "Engine_Size": 3.1,
    "Horsepower": 377
  },
  {
    "Brand": "BMW",
    "Model_Year": 2011,
    "Price": 57780.4,
    "Mileage": 31372,
    "Engine_Size": 3.7,
    "Horsepower": 331
  },
  {
    "Brand": "BMW",
    "Model_Year": 2008,
    "Price": 39225.05,
    "Mileage": 197779,
    "Engine_Size": 2.7,
    "Horsepower": 354
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2018,
    "Price": 50302.0,
    "Mileage": 44080,
    "Engine_Size": 3.9,
    "Horsepower": 188
  },
  {
    "Brand": "BMW",
    "Model_Year": 2019,
    "Price": 55934.9,
    "Mileage": 111242,
    "Engine_Size": 4.3,
    "Horsepower": 237
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2012,
    "Price": 40554.9,
    "Mileage": 47722,
    "Engine_Size": 1.6,
    "Horsepower": 258
  },
  {
    "Brand": "Ford",
    "Model_Year": 2019,
    "Price": 63825.600000000006,
    "Mileage": 34048,
    "Engine_Size": 4.3,
    "Horsepower": 320
  },
  {
    "Brand": "Ford",
    "Model_Year": 2018,
    "Price": 58137.75,
    "Mileage": 90205,
    "Engine_Size": 3.2,
    "Horsepower": 393
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2013,
    "Price": 52174.55,
    "Mileage": 145849,
    "Engine_Size": 4.4,
    "Horsepower": 298
  },
  {
    "Brand": "BMW",
    "Model_Year": 2012,
    "Price": 47832.45,
    "Mileage": 59711,
    "Engine_Size": 2.7,
    "Horsepower": 259
  },
  {
    "Brand": "BMW",
    "Model_Year": 2021,
    "Price": 55855.85,
    "Mileage": 172403,
    "Engine_Size": 2.5,
    "Horsepower": 385
  },
  {
    "Brand": "BMW",
    "Model_Year": 2006,
    "Price": 52307.6,
    "Mileage": 25968,
    "Engine_Size": 4.7,
    "Horsepower": 193
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2007,
    "Price": 29690.95,
    "Mileage": 190041,
    "Engine_Size": 2.0,
    "Horsepower": 153
  },
  {
    "Brand": "Honda",
    "Model_Year": 2012,
    "Price": 59741.4,
    "Mileage": 16292,
    "Engine_Size": 4.4,
    "Horsepower": 366
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2016,
    "Price": 42257.7,
    "Mileage": 176866,
    "Engine_Size": 2.9,
    "Horsepower": 284
  },
  {
    "Brand": "Honda",
    "Model_Year": 2005,
    "Price": 46016.05,
    "Mileage": 84459,
    "Engine_Size": 3.1,
    "Horsepower": 306
  },
  {
    "Brand": "BMW",
    "Model_Year": 2014,
    "Price": 41251.4,
    "Mileage": 55192,
    "Engine_Size": 2.2,
    "Horsepower": 182
  },
  {
    "Brand": "BMW",
    "Model_Year": 2007,
    "Price": 45288.25,
    "Mileage": 163775,
    "Engine_Size": 3.3,
    "Horsepower": 286
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2010,
    "Price": 47743.35,
    "Mileage": 89193,
    "Engine_Size": 2.3,
    "Horsepower": 390
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2011,
    "Price": 39232.75,
    "Mileage": 74165,
    "Engine_Size": 1.2,
    "Horsepower": 315
  },
  {
    "Brand": "Honda",
    "Model_Year": 2022,
    "Price": 58563.5,
    "Mileage": 72650,
    "Engine_Size": 2.1,
    "Horsepower": 388
  },
  {
    "Brand": "Ford",
    "Model_Year": 2015,
    "Price": 24942.6,
    "Mileage": 192588,
    "Engine_Size": 1.0,
    "Horsepower": 106
  },
  {
    "Brand": "Honda",
    "Model_Year": 2023,
    "Price": 59732.1,
    "Mileage": 134858,
    "Engine_Size": 4.9,
    "Horsepower": 133
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2009,
    "Price": 52911.1,
    "Mileage": 106398,
    "Engine_Size": 4.9,
    "Horsepower": 288
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2023,
    "Price": 46135.75,
    "Mileage": 102885,
    "Engine_Size": 2.6,
    "Horsepower": 103
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2015,
    "Price": 40649.55,
    "Mileage": 158329,
    "Engine_Size": 3.9,
    "Horsepower": 108
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2016,
    "Price": 35869.6,
    "Mileage": 105588,
    "Engine_Size": 2.4,
    "Horsepower": 136
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2014,
    "Price": 51923.2,
    "Mileage": 108356,
    "Engine_Size": 3.7,
    "Horsepower": 278
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2012,
    "Price": 61506.55,
    "Mileage": 88509,
    "Engine_Size": 4.2,
    "Horsepower": 387
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2013,
    "Price": 53860.4,
    "Mileage": 56672,
    "Engine_Size": 4.8,
    "Horsepower": 221
  },
  {
    "Brand": "Ford",
    "Model_Year": 2008,
    "Price": 35717.0,
    "Mileage": 199380,
    "Engine_Size": 2.6,
    "Horsepower": 268
  },
  {
    "Brand": "Honda",
    "Model_Year": 2009,
    "Price": 50256.35,
    "Mileage": 27113,
    "Engine_Size": 4.1,
    "Horsepower": 158
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2012,
    "Price": 50214.3,
    "Mileage": 5694,
    "Engine_Size": 2.1,
    "Horsepower": 317
  },
  {
    "Brand": "Honda",
    "Model_Year": 2013,
    "Price": 69174.6,
    "Mileage": 20588,
    "Engine_Size": 5.0,
    "Horsepower": 392
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2019,
    "Price": 29053.6,
    "Mileage": 197828,
    "Engine_Size": 1.1,
    "Horsepower": 148
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2019,
    "Price": 54584.3,
    "Mileage": 197214,
    "Engine_Size": 3.4,
    "Horsepower": 354
  },
  {
    "Brand": "Honda",
    "Model_Year": 2020,
    "Price": 60524.350000000006,
    "Mileage": 69373,
    "Engine_Size": 3.6,
    "Horsepower": 399
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2018,
    "Price": 49596.85,
    "Mileage": 90603,
    "Engine_Size": 3.8,
    "Horsepower": 101
  },
  {
    "Brand": "BMW",
    "Model_Year": 2012,
    "Price": 35972.8,
    "Mileage": 11704,
    "Engine_Size": 1.5,
    "Horsepower": 156
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2022,
    "Price": 59566.2,
    "Mileage": 45136,
    "Engine_Size": 4.8,
    "Horsepower": 108
  },
  {
    "Brand": "Honda",
    "Model_Year": 2014,
    "Price": 38504.65,
    "Mileage": 72507,
    "Engine_Size": 1.7,
    "Horsepower": 170
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2010,
    "Price": 51398.95,
    "Mileage": 52361,
    "Engine_Size": 3.5,
    "Horsepower": 313
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2016,
    "Price": 48300.65,
    "Mileage": 63847,
    "Engine_Size": 1.9,
    "Horsepower": 301
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2006,
    "Price": 31858.050000000003,
    "Mileage": 111359,
    "Engine_Size": 2.2,
    "Horsepower": 137
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2011,
    "Price": 45767.35,
    "Mileage": 147513,
    "Engine_Size": 3.2,
    "Horsepower": 261
  },
  {
    "Brand": "BMW",
    "Model_Year": 2020,
    "Price": 42801.7,
    "Mileage": 123906,
    "Engine_Size": 2.7,
    "Horsepower": 97
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2007,
    "Price": 43804.15,
    "Mileage": 19677,
    "Engine_Size": 1.6,
    "Horsepower": 339
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2017,
    "Price": 49991.1,
    "Mileage": 32818,
    "Engine_Size": 1.7,
    "Horsepower": 295
  },
  {
    "Brand": "Honda",
    "Model_Year": 2007,
    "Price": 36747.6,
    "Mileage": 6868,
    "Engine_Size": 2.7,
    "Horsepower": 146
  },
  {
    "Brand": "Ford",
    "Model_Year": 2022,
    "Price": 61995.45,
    "Mileage": 88591,
    "Engine_Size": 4.0,
    "Horsepower": 292
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2015,
    "Price": 52417.9,
    "Mileage": 128962,
    "Engine_Size": 4.6,
    "Horsepower": 236
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2012,
    "Price": 46087.8,
    "Mileage": 72264,
    "Engine_Size": 1.3,
    "Horsepower": 353
  },
  {
    "Brand": "BMW",
    "Model_Year": 2010,
    "Price": 41088.6,
    "Mileage": 78168,
    "Engine_Size": 2.6,
    "Horsepower": 261
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2005,
    "Price": 22859.25,
    "Mileage": 148115,
    "Engine_Size": 1.4,
    "Horsepower": 158
  },
  {
    "Brand": "Ford",
    "Model_Year": 2005,
    "Price": 23833.05,
    "Mileage": 76939,
    "Engine_Size": 1.1,
    "Horsepower": 101
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2012,
    "Price": 50396.4,
    "Mileage": 20732,
    "Engine_Size": 3.6,
    "Horsepower": 206
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2009,
    "Price": 49984.8,
    "Mileage": 60244,
    "Engine_Size": 3.4,
    "Horsepower": 225
  },
  {
    "Brand": "Honda",
    "Model_Year": 2020,
    "Price": 49241.1,
    "Mileage": 154598,
    "Engine_Size": 1.7,
    "Horsepower": 319
  },
  {
    "Brand": "Ford",
    "Model_Year": 2015,
    "Price": 38950.0,
    "Mileage": 14340,
    "Engine_Size": 1.9,
    "Horsepower": 164
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2009,
    "Price": 27034.3,
    "Mileage": 27394,
    "Engine_Size": 1.1,
    "Horsepower": 86
  },
  {
    "Brand": "Honda",
    "Model_Year": 2008,
    "Price": 44507.15,
    "Mileage": 103557,
    "Engine_Size": 4.3,
    "Horsepower": 186
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2010,
    "Price": 57246.3,
    "Mileage": 140174,
    "Engine_Size": 4.9,
    "Horsepower": 380
  },
  {
    "Brand": "Honda",
    "Model_Year": 2018,
    "Price": 38272.05,
    "Mileage": 24159,
    "Engine_Size": 1.5,
    "Horsepower": 79
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2023,
    "Price": 40949.7,
    "Mileage": 127366,
    "Engine_Size": 1.9,
    "Horsepower": 149
  },
  {
    "Brand": "BMW",
    "Model_Year": 2013,
    "Price": 54068.4,
    "Mileage": 11212,
    "Engine_Size": 4.5,
    "Horsepower": 203
  },
  {
    "Brand": "BMW",
    "Model_Year": 2016,
    "Price": 61574.75,
    "Mileage": 42405,
    "Engine_Size": 4.7,
    "Horsepower": 272
  },
  {
    "Brand": "BMW",
    "Model_Year": 2015,
    "Price": 44960.4,
    "Mileage": 135632,
    "Engine_Size": 2.7,
    "Horsepower": 185
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2018,
    "Price": 42796.95,
    "Mileage": 82061,
    "Engine_Size": 1.2,
    "Horsepower": 289
  },
  {
    "Brand": "BMW",
    "Model_Year": 2020,
    "Price": 49288.2,
    "Mileage": 99296,
    "Engine_Size": 1.2,
    "Horsepower": 322
  },
  {
    "Brand": "Ford",
    "Model_Year": 2005,
    "Price": 41049.7,
    "Mileage": 60186,
    "Engine_Size": 3.3,
    "Horsepower": 238
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2017,
    "Price": 54542.45,
    "Mileage": 180311,
    "Engine_Size": 2.6,
    "Horsepower": 385
  },
  {
    "Brand": "Honda",
    "Model_Year": 2017,
    "Price": 41692.75,
    "Mileage": 128145,
    "Engine_Size": 1.1,
    "Horsepower": 274
  },
  {
    "Brand": "Honda",
    "Model_Year": 2006,
    "Price": 53660.4,
    "Mileage": 15532,
    "Engine_Size": 3.3,
    "Horsepower": 367
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2008,
    "Price": 40862.0,
    "Mileage": 71540,
    "Engine_Size": 1.0,
    "Horsepower": 317
  },
  {
    "Brand": "BMW",
    "Model_Year": 2010,
    "Price": 43726.95,
    "Mileage": 108021,
    "Engine_Size": 4.1,
    "Horsepower": 140
  },
  {
    "Brand": "BMW",
    "Model_Year": 2009,
    "Price": 43191.45,
    "Mileage": 8271,
    "Engine_Size": 2.2,
    "Horsepower": 225
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2007,
    "Price": 28432.3,
    "Mileage": 181554,
    "Engine_Size": 1.2,
    "Horsepower": 171
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2005,
    "Price": 40185.55,
    "Mileage": 5209,
    "Engine_Size": 3.4,
    "Horsepower": 82
  },
  {
    "Brand": "Ford",
    "Model_Year": 2008,
    "Price": 43549.45,
    "Mileage": 141611,
    "Engine_Size": 2.6,
    "Horsepower": 340
  },
  {
    "Brand": "Honda",
    "Model_Year": 2006,
    "Price": 59262.15,
    "Mileage": 24977,
    "Engine_Size": 4.9,
    "Horsepower": 361
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2009,
    "Price": 44518.0,
    "Mileage": 114920,
    "Engine_Size": 3.2,
    "Horsepower": 289
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2007,
    "Price": 26378.2,
    "Mileage": 133156,
    "Engine_Size": 2.1,
    "Horsepower": 84
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2013,
    "Price": 51926.6,
    "Mileage": 104588,
    "Engine_Size": 3.8,
    "Horsepower": 307
  },
  {
    "Brand": "Honda",
    "Model_Year": 2010,
    "Price": 36494.8,
    "Mileage": 73684,
    "Engine_Size": 2.1,
    "Horsepower": 186
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2022,
    "Price": 56603.9,
    "Mileage": 128862,
    "Engine_Size": 4.6,
    "Horsepower": 125
  },
  {
    "Brand": "Ford",
    "Model_Year": 2010,
    "Price": 43403.65,
    "Mileage": 10607,
    "Engine_Size": 2.5,
    "Horsepower": 201
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2023,
    "Price": 56855.7,
    "Mileage": 99786,
    "Engine_Size": 3.2,
    "Horsepower": 295
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2016,
    "Price": 47726.7,
    "Mileage": 131406,
    "Engine_Size": 1.2,
    "Horsepower": 377
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2015,
    "Price": 48376.45,
    "Mileage": 188011,
    "Engine_Size": 2.7,
    "Horsepower": 291
  },
  {
    "Brand": "Ford",
    "Model_Year": 2006,
    "Price": 48078.7,
    "Mileage": 154666,
    "Engine_Size": 4.3,
    "Horsepower": 242
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2019,
    "Price": 59676.3,
    "Mileage": 194454,
    "Engine_Size": 4.2,
    "Horsepower": 354
  },
  {
    "Brand": "Ford",
    "Model_Year": 2016,
    "Price": 57489.05,
    "Mileage": 12399,
    "Engine_Size": 1.9,
    "Horsepower": 378
  },
  {
    "Brand": "Honda",
    "Model_Year": 2016,
    "Price": 41911.4,
    "Mileage": 131812,
    "Engine_Size": 1.9,
    "Horsepower": 226
  },
  {
    "Brand": "BMW",
    "Model_Year": 2013,
    "Price": 46469.55,
    "Mileage": 161189,
    "Engine_Size": 4.3,
    "Horsepower": 220
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2006,
    "Price": 50078.9,
    "Mileage": 103662,
    "Engine_Size": 4.7,
    "Horsepower": 254
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2007,
    "Price": 36045.15,
    "Mileage": 38617,
    "Engine_Size": 1.4,
    "Horsepower": 247
  },
  {
    "Brand": "Honda",
    "Model_Year": 2016,
    "Price": 39110.5,
    "Mileage": 143570,
    "Engine_Size": 2.8,
    "Horsepower": 90
  },
  {
    "Brand": "Ford",
    "Model_Year": 2020,
    "Price": 45274.7,
    "Mileage": 107826,
    "Engine_Size": 2.3,
    "Horsepower": 181
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2005,
    "Price": 42981.45,
    "Mileage": 134851,
    "Engine_Size": 4.5,
    "Horsepower": 240
  },
  {
    "Brand": "Honda",
    "Model_Year": 2007,
    "Price": 31022.15,
    "Mileage": 116077,
    "Engine_Size": 1.3,
    "Horsepower": 207
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2006,
    "Price": 41038.8,
    "Mileage": 55624,
    "Engine_Size": 1.8,
    "Horsepower": 302
  },
  {
    "Brand": "Ford",
    "Model_Year": 2013,
    "Price": 52233.6,
    "Mileage": 14628,
    "Engine_Size": 4.0,
    "Horsepower": 99
  },
  {
    "Brand": "BMW",
    "Model_Year": 2023,
    "Price": 49694.95,
    "Mileage": 136401,
    "Engine_Size": 1.2,
    "Horsepower": 376
  },
  {
    "Brand": "Honda",
    "Model_Year": 2019,
    "Price": 53787.05,
    "Mileage": 43619,
    "Engine_Size": 3.0,
    "Horsepower": 230
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2022,
    "Price": 51131.4,
    "Mileage": 12032,
    "Engine_Size": 2.8,
    "Horsepower": 147
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2015,
    "Price": 43054.7,
    "Mileage": 184166,
    "Engine_Size": 2.3,
    "Horsepower": 347
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2020,
    "Price": 60895.3,
    "Mileage": 43034,
    "Engine_Size": 2.6,
    "Horsepower": 389
  },
  {
    "Brand": "Ford",
    "Model_Year": 2021,
    "Price": 46065.1,
    "Mileage": 107658,
    "Engine_Size": 3.1,
    "Horsepower": 90
  },
  {
    "Brand": "Honda",
    "Model_Year": 2009,
    "Price": 34401.85,
    "Mileage": 126123,
    "Engine_Size": 1.6,
    "Horsepower": 212
  },
  {
    "Brand": "Honda",
    "Model_Year": 2016,
    "Price": 44800.1,
    "Mileage": 91158,
    "Engine_Size": 3.3,
    "Horsepower": 105
  },
  {
    "Brand": "BMW",
    "Model_Year": 2015,
    "Price": 60917.8,
    "Mileage": 60264,
    "Engine_Size": 4.2,
    "Horsepower": 372
  },
  {
    "Brand": "BMW",
    "Model_Year": 2019,
    "Price": 56572.0,
    "Mileage": 99120,
    "Engine_Size": 4.0,
    "Horsepower": 283
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2007,
    "Price": 28804.5,
    "Mileage": 52850,
    "Engine_Size": 1.6,
    "Horsepower": 101
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2005,
    "Price": 38109.9,
    "Mileage": 9722,
    "Engine_Size": 1.6,
    "Horsepower": 255
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2020,
    "Price": 47440.4,
    "Mileage": 22772,
    "Engine_Size": 2.1,
    "Horsepower": 243
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2006,
    "Price": 35212.75,
    "Mileage": 91105,
    "Engine_Size": 2.4,
    "Horsepower": 123
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2006,
    "Price": 35503.45,
    "Mileage": 177751,
    "Engine_Size": 2.6,
    "Horsepower": 230
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2007,
    "Price": 51833.2,
    "Mileage": 9576,
    "Engine_Size": 3.7,
    "Horsepower": 319
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2012,
    "Price": 34794.05,
    "Mileage": 162779,
    "Engine_Size": 1.2,
    "Horsepower": 320
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2019,
    "Price": 43153.8,
    "Mileage": 104404,
    "Engine_Size": 1.1,
    "Horsepower": 348
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2011,
    "Price": 40497.8,
    "Mileage": 177704,
    "Engine_Size": 2.6,
    "Horsepower": 240
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2010,
    "Price": 52756.2,
    "Mileage": 46476,
    "Engine_Size": 3.8,
    "Horsepower": 252
  },
  {
    "Brand": "Ford",
    "Model_Year": 2013,
    "Price": 27974.15,
    "Mileage": 166357,
    "Engine_Size": 1.8,
    "Horsepower": 71
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2005,
    "Price": 43909.3,
    "Mileage": 29154,
    "Engine_Size": 3.6,
    "Horsepower": 263
  },
  {
    "Brand": "BMW",
    "Model_Year": 2012,
    "Price": 35007.7,
    "Mileage": 156126,
    "Engine_Size": 2.0,
    "Horsepower": 235
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2007,
    "Price": 56199.75,
    "Mileage": 22165,
    "Engine_Size": 4.5,
    "Horsepower": 316
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2008,
    "Price": 58252.05,
    "Mileage": 19439,
    "Engine_Size": 4.6,
    "Horsepower": 313
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2019,
    "Price": 44759.45,
    "Mileage": 123211,
    "Engine_Size": 2.2,
    "Horsepower": 179
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2010,
    "Price": 52457.1,
    "Mileage": 49518,
    "Engine_Size": 1.9,
    "Horsepower": 392
  },
  {
    "Brand": "BMW",
    "Model_Year": 2019,
    "Price": 43614.9,
    "Mileage": 31962,
    "Engine_Size": 2.6,
    "Horsepower": 140
  },
  {
    "Brand": "BMW",
    "Model_Year": 2007,
    "Price": 32042.7,
    "Mileage": 190006,
    "Engine_Size": 2.0,
    "Horsepower": 233
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2018,
    "Price": 59506.85,
    "Mileage": 42763,
    "Engine_Size": 3.7,
    "Horsepower": 354
  },
  {
    "Brand": "Ford",
    "Model_Year": 2018,
    "Price": 50977.55,
    "Mileage": 121189,
    "Engine_Size": 4.3,
    "Horsepower": 182
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2008,
    "Price": 50113.5,
    "Mileage": 115290,
    "Engine_Size": 3.7,
    "Horsepower": 297
  },
  {
    "Brand": "Honda",
    "Model_Year": 2016,
    "Price": 58468.3,
    "Mileage": 115814,
    "Engine_Size": 4.3,
    "Horsepower": 370
  },
  {
    "Brand": "Ford",
    "Model_Year": 2021,
    "Price": 45082.8,
    "Mileage": 24464,
    "Engine_Size": 2.6,
    "Horsepower": 85
  },
  {
    "Brand": "Ford",
    "Model_Year": 2011,
    "Price": 29023.6,
    "Mileage": 178108,
    "Engine_Size": 1.6,
    "Horsepower": 100
  },
  {
    "Brand": "BMW",
    "Model_Year": 2013,
    "Price": 48574.0,
    "Mileage": 128980,
    "Engine_Size": 4.0,
    "Horsepower": 231
  },
  {
    "Brand": "Ford",
    "Model_Year": 2007,
    "Price": 40165.9,
    "Mileage": 169342,
    "Engine_Size": 2.4,
    "Horsepower": 375
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2017,
    "Price": 59780.05,
    "Mileage": 47299,
    "Engine_Size": 3.7,
    "Horsepower": 262
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2019,
    "Price": 53309.95,
    "Mileage": 36541,
    "Engine_Size": 2.1,
    "Horsepower": 279
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2022,
    "Price": 49406.75,
    "Mileage": 78545,
    "Engine_Size": 1.3,
    "Horsepower": 301
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2023,
    "Price": 58698.6,
    "Mileage": 134188,
    "Engine_Size": 5.0,
    "Horsepower": 253
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2005,
    "Price": 30252.75,
    "Mileage": 34765,
    "Engine_Size": 1.6,
    "Horsepower": 84
  },
  {
    "Brand": "BMW",
    "Model_Year": 2010,
    "Price": 64110.55,
    "Mileage": 28769,
    "Engine_Size": 5.0,
    "Horsepower": 374
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2006,
    "Price": 58640.2,
    "Mileage": 25156,
    "Engine_Size": 4.9,
    "Horsepower": 278
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2018,
    "Price": 52309.35,
    "Mileage": 186553,
    "Engine_Size": 4.2,
    "Horsepower": 241
  },
  {
    "Brand": "Honda",
    "Model_Year": 2010,
    "Price": 48773.65,
    "Mileage": 149507,
    "Engine_Size": 3.6,
    "Horsepower": 335
  },
  {
    "Brand": "BMW",
    "Model_Year": 2018,
    "Price": 39454.6,
    "Mileage": 182408,
    "Engine_Size": 3.3,
    "Horsepower": 89
  },
  {
    "Brand": "Honda",
    "Model_Year": 2008,
    "Price": 43734.65,
    "Mileage": 172207,
    "Engine_Size": 4.5,
    "Horsepower": 139
  },
  {
    "Brand": "BMW",
    "Model_Year": 2012,
    "Price": 32815.45,
    "Mileage": 78631,
    "Engine_Size": 2.2,
    "Horsepower": 77
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2007,
    "Price": 32381.550000000003,
    "Mileage": 42909,
    "Engine_Size": 2.9,
    "Horsepower": 103
  },
  {
    "Brand": "Ford",
    "Model_Year": 2023,
    "Price": 62032.65,
    "Mileage": 74487,
    "Engine_Size": 3.5,
    "Horsepower": 293
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2018,
    "Price": 44909.0,
    "Mileage": 157540,
    "Engine_Size": 2.6,
    "Horsepower": 248
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2021,
    "Price": 57961.25,
    "Mileage": 52655,
    "Engine_Size": 2.7,
    "Horsepower": 315
  },
  {
    "Brand": "Honda",
    "Model_Year": 2012,
    "Price": 41822.35,
    "Mileage": 170413,
    "Engine_Size": 2.3,
    "Horsepower": 329
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2018,
    "Price": 47301.7,
    "Mileage": 56786,
    "Engine_Size": 3.3,
    "Horsepower": 177
  },
  {
    "Brand": "Ford",
    "Model_Year": 2010,
    "Price": 52852.8,
    "Mileage": 73304,
    "Engine_Size": 4.4,
    "Horsepower": 311
  },
  {
    "Brand": "BMW",
    "Model_Year": 2020,
    "Price": 38409.7,
    "Mileage": 108606,
    "Engine_Size": 1.8,
    "Horsepower": 93
  },
  {
    "Brand": "Ford",
    "Model_Year": 2023,
    "Price": 61171.7,
    "Mileage": 182586,
    "Engine_Size": 4.7,
    "Horsepower": 285
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2018,
    "Price": 47531.1,
    "Mileage": 125938,
    "Engine_Size": 3.8,
    "Horsepower": 124
  },
  {
    "Brand": "Ford",
    "Model_Year": 2023,
    "Price": 48773.45,
    "Mileage": 170051,
    "Engine_Size": 4.3,
    "Horsepower": 95
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2007,
    "Price": 46645.95,
    "Mileage": 85981,
    "Engine_Size": 3.2,
    "Horsepower": 350
  },
  {
    "Brand": "Ford",
    "Model_Year": 2014,
    "Price": 63108.65,
    "Mileage": 60107,
    "Engine_Size": 4.1,
    "Horsepower": 361
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2023,
    "Price": 52145.4,
    "Mileage": 137232,
    "Engine_Size": 1.1,
    "Horsepower": 396
  },
  {
    "Brand": "Honda",
    "Model_Year": 2013,
    "Price": 54605.15,
    "Mileage": 92897,
    "Engine_Size": 4.3,
    "Horsepower": 255
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2017,
    "Price": 32451.15,
    "Mileage": 77577,
    "Engine_Size": 1.2,
    "Horsepower": 81
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2011,
    "Price": 49724.1,
    "Mileage": 146918,
    "Engine_Size": 4.6,
    "Horsepower": 198
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2018,
    "Price": 61629.0,
    "Mileage": 109180,
    "Engine_Size": 5.0,
    "Horsepower": 277
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2013,
    "Price": 40338.8,
    "Mileage": 24924,
    "Engine_Size": 2.2,
    "Horsepower": 202
  },
  {
    "Brand": "BMW",
    "Model_Year": 2023,
    "Price": 46974.35,
    "Mileage": 116193,
    "Engine_Size": 1.8,
    "Horsepower": 265
  },
  {
    "Brand": "Ford",
    "Model_Year": 2019,
    "Price": 59251.3,
    "Mileage": 149954,
    "Engine_Size": 4.1,
    "Horsepower": 331
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2018,
    "Price": 55884.25,
    "Mileage": 6095,
    "Engine_Size": 2.0,
    "Horsepower": 351
  },
  {
    "Brand": "BMW",
    "Model_Year": 2010,
    "Price": 49003.75,
    "Mileage": 109205,
    "Engine_Size": 4.5,
    "Horsepower": 172
  },
  {
    "Brand": "BMW",
    "Model_Year": 2008,
    "Price": 27042.25,
    "Mileage": 177055,
    "Engine_Size": 1.4,
    "Horsepower": 189
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2012,
    "Price": 40797.85,
    "Mileage": 19123,
    "Engine_Size": 1.5,
    "Horsepower": 252
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2021,
    "Price": 55087.1,
    "Mileage": 50278,
    "Engine_Size": 4.9,
    "Horsepower": 78
  },
  {
    "Brand": "Honda",
    "Model_Year": 2013,
    "Price": 44183.45,
    "Mileage": 102911,
    "Engine_Size": 3.7,
    "Horsepower": 114
  },
  {
    "Brand": "Honda",
    "Model_Year": 2005,
    "Price": 55790.05,
    "Mileage": 56999,
    "Engine_Size": 4.4,
    "Horsepower": 313
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2018,
    "Price": 52711.35,
    "Mileage": 36153,
    "Engine_Size": 2.3,
    "Horsepower": 339
  },
  {
    "Brand": "Honda",
    "Model_Year": 2015,
    "Price": 48657.8,
    "Mileage": 23344,
    "Engine_Size": 3.7,
    "Horsepower": 181
  },
  {
    "Brand": "Ford",
    "Model_Year": 2007,
    "Price": 42413.2,
    "Mileage": 42656,
    "Engine_Size": 3.4,
    "Horsepower": 124
  },
  {
    "Brand": "Honda",
    "Model_Year": 2013,
    "Price": 47006.4,
    "Mileage": 6212,
    "Engine_Size": 3.4,
    "Horsepower": 84
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2018,
    "Price": 48020.75,
    "Mileage": 125385,
    "Engine_Size": 3.7,
    "Horsepower": 106
  },
  {
    "Brand": "Honda",
    "Model_Year": 2013,
    "Price": 44101.35,
    "Mileage": 145073,
    "Engine_Size": 3.3,
    "Horsepower": 247
  },
  {
    "Brand": "Ford",
    "Model_Year": 2008,
    "Price": 42191.8,
    "Mileage": 83784,
    "Engine_Size": 2.7,
    "Horsepower": 196
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2008,
    "Price": 35945.85,
    "Mileage": 103723,
    "Engine_Size": 2.1,
    "Horsepower": 186
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2012,
    "Price": 42970.8,
    "Mileage": 86144,
    "Engine_Size": 4.1,
    "Horsepower": 141
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2006,
    "Price": 28026.05,
    "Mileage": 172499,
    "Engine_Size": 1.9,
    "Horsepower": 180
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2013,
    "Price": 53807.6,
    "Mileage": 36368,
    "Engine_Size": 3.8,
    "Horsepower": 218
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2018,
    "Price": 46860.0,
    "Mileage": 66160,
    "Engine_Size": 1.9,
    "Horsepower": 254
  },
  {
    "Brand": "BMW",
    "Model_Year": 2013,
    "Price": 42759.7,
    "Mileage": 161926,
    "Engine_Size": 3.5,
    "Horsepower": 174
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2020,
    "Price": 60416.25,
    "Mileage": 15715,
    "Engine_Size": 4.0,
    "Horsepower": 216
  },
  {
    "Brand": "BMW",
    "Model_Year": 2021,
    "Price": 50257.8,
    "Mileage": 63784,
    "Engine_Size": 1.9,
    "Horsepower": 290
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2020,
    "Price": 49996.35,
    "Mileage": 134193,
    "Engine_Size": 1.2,
    "Horsepower": 383
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2016,
    "Price": 34708.8,
    "Mileage": 104644,
    "Engine_Size": 1.5,
    "Horsepower": 75
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2007,
    "Price": 50653.15,
    "Mileage": 31797,
    "Engine_Size": 3.4,
    "Horsepower": 329
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2015,
    "Price": 60818.350000000006,
    "Mileage": 52573,
    "Engine_Size": 4.4,
    "Horsepower": 368
  },
  {
    "Brand": "Ford",
    "Model_Year": 2018,
    "Price": 33998.0,
    "Mileage": 81120,
    "Engine_Size": 1.2,
    "Horsepower": 111
  },
  {
    "Brand": "Ford",
    "Model_Year": 2022,
    "Price": 67866.0,
    "Mileage": 19780,
    "Engine_Size": 3.9,
    "Horsepower": 328
  },
  {
    "Brand": "Honda",
    "Model_Year": 2009,
    "Price": 47188.75,
    "Mileage": 42905,
    "Engine_Size": 2.4,
    "Horsepower": 340
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2020,
    "Price": 39259.75,
    "Mileage": 157645,
    "Engine_Size": 2.9,
    "Horsepower": 116
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2009,
    "Price": 44318.55,
    "Mileage": 121049,
    "Engine_Size": 4.7,
    "Horsepower": 154
  },
  {
    "Brand": "BMW",
    "Model_Year": 2007,
    "Price": 38877.45,
    "Mileage": 134651,
    "Engine_Size": 2.3,
    "Horsepower": 243
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2016,
    "Price": 46635.05,
    "Mileage": 38359,
    "Engine_Size": 2.9,
    "Horsepower": 127
  },
  {
    "Brand": "Honda",
    "Model_Year": 2005,
    "Price": 31959.9,
    "Mileage": 71062,
    "Engine_Size": 1.1,
    "Horsepower": 268
  },
  {
    "Brand": "Ford",
    "Model_Year": 2013,
    "Price": 39271.45,
    "Mileage": 78391,
    "Engine_Size": 1.3,
    "Horsepower": 278
  },
  {
    "Brand": "BMW",
    "Model_Year": 2013,
    "Price": 48105.85,
    "Mileage": 48463,
    "Engine_Size": 2.0,
    "Horsepower": 317
  },
  {
    "Brand": "BMW",
    "Model_Year": 2008,
    "Price": 33570.2,
    "Mileage": 104596,
    "Engine_Size": 1.1,
    "Horsepower": 280
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2007,
    "Price": 40182.1,
    "Mileage": 100018,
    "Engine_Size": 3.5,
    "Horsepower": 108
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2021,
    "Price": 56765.45,
    "Mileage": 21571,
    "Engine_Size": 2.7,
    "Horsepower": 321
  },
  {
    "Brand": "Ford",
    "Model_Year": 2006,
    "Price": 36191.3,
    "Mileage": 155214,
    "Engine_Size": 3.2,
    "Horsepower": 200
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2005,
    "Price": 41288.8,
    "Mileage": 30104,
    "Engine_Size": 1.7,
    "Horsepower": 360
  },
  {
    "Brand": "BMW",
    "Model_Year": 2012,
    "Price": 46333.75,
    "Mileage": 13625,
    "Engine_Size": 2.2,
    "Horsepower": 319
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2017,
    "Price": 50229.05,
    "Mileage": 44199,
    "Engine_Size": 3.7,
    "Horsepower": 121
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2019,
    "Price": 50738.75,
    "Mileage": 125725,
    "Engine_Size": 4.9,
    "Horsepower": 83
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2012,
    "Price": 33495.1,
    "Mileage": 151998,
    "Engine_Size": 1.2,
    "Horsepower": 225
  },
  {
    "Brand": "Ford",
    "Model_Year": 2016,
    "Price": 55084.1,
    "Mileage": 36218,
    "Engine_Size": 4.6,
    "Horsepower": 99
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2016,
    "Price": 38709.8,
    "Mileage": 180544,
    "Engine_Size": 3.3,
    "Horsepower": 159
  },
  {
    "Brand": "BMW",
    "Model_Year": 2018,
    "Price": 50792.2,
    "Mileage": 96916,
    "Engine_Size": 3.3,
    "Horsepower": 236
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2019,
    "Price": 43316.9,
    "Mileage": 128182,
    "Engine_Size": 3.0,
    "Horsepower": 138
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2019,
    "Price": 43970.7,
    "Mileage": 25566,
    "Engine_Size": 1.3,
    "Horsepower": 232
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2013,
    "Price": 37841.15,
    "Mileage": 192197,
    "Engine_Size": 1.4,
    "Horsepower": 311
  },
  {
    "Brand": "BMW",
    "Model_Year": 2023,
    "Price": 52588.75,
    "Mileage": 38205,
    "Engine_Size": 3.4,
    "Horsepower": 121
  },
  {
    "Brand": "BMW",
    "Model_Year": 2012,
    "Price": 41647.8,
    "Mileage": 114084,
    "Engine_Size": 2.4,
    "Horsepower": 211
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2023,
    "Price": 59839.15,
    "Mileage": 34717,
    "Engine_Size": 4.7,
    "Horsepower": 132
  },
  {
    "Brand": "Honda",
    "Model_Year": 2010,
    "Price": 45206.2,
    "Mileage": 186056,
    "Engine_Size": 2.6,
    "Horsepower": 361
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2023,
    "Price": 41175.4,
    "Mileage": 112292,
    "Engine_Size": 1.6,
    "Horsepower": 160
  },
  {
    "Brand": "Ford",
    "Model_Year": 2008,
    "Price": 41972.65,
    "Mileage": 161207,
    "Engine_Size": 3.9,
    "Horsepower": 221
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2011,
    "Price": 37534.2,
    "Mileage": 164236,
    "Engine_Size": 2.2,
    "Horsepower": 226
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2008,
    "Price": 50279.9,
    "Mileage": 43562,
    "Engine_Size": 3.1,
    "Horsepower": 378
  },
  {
    "Brand": "Honda",
    "Model_Year": 2016,
    "Price": 54878.55,
    "Mileage": 25169,
    "Engine_Size": 3.8,
    "Horsepower": 219
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2017,
    "Price": 60470.5,
    "Mileage": 195930,
    "Engine_Size": 4.6,
    "Horsepower": 397
  },
  {
    "Brand": "Honda",
    "Model_Year": 2007,
    "Price": 51459.8,
    "Mileage": 26604,
    "Engine_Size": 4.2,
    "Horsepower": 340
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2016,
    "Price": 42926.5,
    "Mileage": 94670,
    "Engine_Size": 3.7,
    "Horsepower": 138
  },
  {
    "Brand": "BMW",
    "Model_Year": 2006,
    "Price": 40090.75,
    "Mileage": 119605,
    "Engine_Size": 3.7,
    "Horsepower": 185
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2006,
    "Price": 51639.1,
    "Mileage": 93738,
    "Engine_Size": 4.8,
    "Horsepower": 261
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2013,
    "Price": 30917.2,
    "Mileage": 136756,
    "Engine_Size": 2.2,
    "Horsepower": 73
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2005,
    "Price": 23909.0,
    "Mileage": 133140,
    "Engine_Size": 1.0,
    "Horsepower": 144
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2012,
    "Price": 43230.15,
    "Mileage": 107537,
    "Engine_Size": 2.1,
    "Horsepower": 367
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2010,
    "Price": 41450.95,
    "Mileage": 116301,
    "Engine_Size": 1.9,
    "Horsepower": 310
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2010,
    "Price": 44833.65,
    "Mileage": 13007,
    "Engine_Size": 3.6,
    "Horsepower": 99
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2022,
    "Price": 49731.25,
    "Mileage": 119915,
    "Engine_Size": 3.5,
    "Horsepower": 212
  },
  {
    "Brand": "Honda",
    "Model_Year": 2021,
    "Price": 61660.05,
    "Mileage": 122419,
    "Engine_Size": 3.4,
    "Horsepower": 395
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2016,
    "Price": 42532.65,
    "Mileage": 46787,
    "Engine_Size": 1.1,
    "Horsepower": 252
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2010,
    "Price": 43044.9,
    "Mileage": 54582,
    "Engine_Size": 3.9,
    "Horsepower": 85
  },
  {
    "Brand": "BMW",
    "Model_Year": 2012,
    "Price": 41651.55,
    "Mileage": 88629,
    "Engine_Size": 2.3,
    "Horsepower": 180
  },
  {
    "Brand": "BMW",
    "Model_Year": 2023,
    "Price": 66484.9,
    "Mileage": 10782,
    "Engine_Size": 3.7,
    "Horsepower": 270
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2014,
    "Price": 45675.5,
    "Mileage": 71770,
    "Engine_Size": 3.2,
    "Horsepower": 176
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2005,
    "Price": 36272.75,
    "Mileage": 62645,
    "Engine_Size": 2.4,
    "Horsepower": 231
  },
  {
    "Brand": "BMW",
    "Model_Year": 2017,
    "Price": 49299.55,
    "Mileage": 108509,
    "Engine_Size": 1.5,
    "Horsepower": 352
  },
  {
    "Brand": "BMW",
    "Model_Year": 2021,
    "Price": 44547.6,
    "Mileage": 168068,
    "Engine_Size": 1.4,
    "Horsepower": 338
  },
  {
    "Brand": "Honda",
    "Model_Year": 2007,
    "Price": 51193.8,
    "Mileage": 34204,
    "Engine_Size": 4.3,
    "Horsepower": 224
  },
  {
    "Brand": "Ford",
    "Model_Year": 2012,
    "Price": 51962.4,
    "Mileage": 22152,
    "Engine_Size": 4.7,
    "Horsepower": 142
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2018,
    "Price": 47463.1,
    "Mileage": 191258,
    "Engine_Size": 3.6,
    "Horsepower": 266
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2007,
    "Price": 34447.25,
    "Mileage": 95555,
    "Engine_Size": 1.4,
    "Horsepower": 312
  },
  {
    "Brand": "Ford",
    "Model_Year": 2020,
    "Price": 47876.55,
    "Mileage": 24689,
    "Engine_Size": 2.6,
    "Horsepower": 155
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2017,
    "Price": 53779.9,
    "Mileage": 186762,
    "Engine_Size": 3.9,
    "Horsepower": 356
  },
  {
    "Brand": "BMW",
    "Model_Year": 2021,
    "Price": 58892.45,
    "Mileage": 88251,
    "Engine_Size": 4.1,
    "Horsepower": 328
  },
  {
    "Brand": "Ford",
    "Model_Year": 2017,
    "Price": 44139.4,
    "Mileage": 193392,
    "Engine_Size": 1.5,
    "Horsepower": 355
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2010,
    "Price": 30718.85,
    "Mileage": 192163,
    "Engine_Size": 1.0,
    "Horsepower": 218
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2021,
    "Price": 56841.75,
    "Mileage": 111565,
    "Engine_Size": 3.8,
    "Horsepower": 259
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2018,
    "Price": 49610.3,
    "Mileage": 158014,
    "Engine_Size": 2.4,
    "Horsepower": 286
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2021,
    "Price": 46661.4,
    "Mileage": 43712,
    "Engine_Size": 2.0,
    "Horsepower": 155
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2012,
    "Price": 37812.4,
    "Mileage": 54632,
    "Engine_Size": 1.1,
    "Horsepower": 285
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2015,
    "Price": 55187.85,
    "Mileage": 174103,
    "Engine_Size": 3.2,
    "Horsepower": 389
  },
  {
    "Brand": "BMW",
    "Model_Year": 2005,
    "Price": 47353.1,
    "Mileage": 25478,
    "Engine_Size": 4.4,
    "Horsepower": 187
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2011,
    "Price": 48620.45,
    "Mileage": 27551,
    "Engine_Size": 4.8,
    "Horsepower": 156
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2021,
    "Price": 50549.6,
    "Mileage": 53068,
    "Engine_Size": 3.3,
    "Horsepower": 109
  },
  {
    "Brand": "Ford",
    "Model_Year": 2014,
    "Price": 48564.6,
    "Mileage": 98608,
    "Engine_Size": 3.1,
    "Horsepower": 230
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2015,
    "Price": 40643.95,
    "Mileage": 40561,
    "Engine_Size": 1.3,
    "Horsepower": 260
  },
  {
    "Brand": "Honda",
    "Model_Year": 2013,
    "Price": 37961.8,
    "Mileage": 138964,
    "Engine_Size": 3.2,
    "Horsepower": 94
  },
  {
    "Brand": "Honda",
    "Model_Year": 2013,
    "Price": 47161.25,
    "Mileage": 29395,
    "Engine_Size": 2.5,
    "Horsepower": 221
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2009,
    "Price": 42864.2,
    "Mileage": 23756,
    "Engine_Size": 3.4,
    "Horsepower": 164
  },
  {
    "Brand": "BMW",
    "Model_Year": 2021,
    "Price": 41952.85,
    "Mileage": 170723,
    "Engine_Size": 2.6,
    "Horsepower": 115
  },
  {
    "Brand": "Honda",
    "Model_Year": 2013,
    "Price": 38004.35,
    "Mileage": 71333,
    "Engine_Size": 2.0,
    "Horsepower": 207
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2021,
    "Price": 49378.1,
    "Mileage": 185378,
    "Engine_Size": 1.4,
    "Horsepower": 357
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2023,
    "Price": 44623.1,
    "Mileage": 157418,
    "Engine_Size": 2.3,
    "Horsepower": 233
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2011,
    "Price": 29599.95,
    "Mileage": 118561,
    "Engine_Size": 1.4,
    "Horsepower": 85
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2013,
    "Price": 35377.8,
    "Mileage": 33024,
    "Engine_Size": 1.7,
    "Horsepower": 87
  },
  {
    "Brand": "Ford",
    "Model_Year": 2011,
    "Price": 52670.5,
    "Mileage": 176890,
    "Engine_Size": 4.9,
    "Horsepower": 205
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2017,
    "Price": 59281.65,
    "Mileage": 10947,
    "Engine_Size": 2.8,
    "Horsepower": 316
  },
  {
    "Brand": "Ford",
    "Model_Year": 2015,
    "Price": 52879.4,
    "Mileage": 132192,
    "Engine_Size": 3.1,
    "Horsepower": 317
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2018,
    "Price": 60738.1,
    "Mileage": 99238,
    "Engine_Size": 4.5,
    "Horsepower": 267
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2023,
    "Price": 53474.6,
    "Mileage": 72428,
    "Engine_Size": 5.0,
    "Horsepower": 70
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2015,
    "Price": 46370.7,
    "Mileage": 165826,
    "Engine_Size": 3.3,
    "Horsepower": 259
  },
  {
    "Brand": "Ford",
    "Model_Year": 2017,
    "Price": 61155.25,
    "Mileage": 68355,
    "Engine_Size": 4.2,
    "Horsepower": 363
  },
  {
    "Brand": "Ford",
    "Model_Year": 2018,
    "Price": 38005.35,
    "Mileage": 194313,
    "Engine_Size": 2.3,
    "Horsepower": 114
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2017,
    "Price": 33798.1,
    "Mileage": 134958,
    "Engine_Size": 2.2,
    "Horsepower": 101
  },
  {
    "Brand": "Honda",
    "Model_Year": 2005,
    "Price": 33138.5,
    "Mileage": 149490,
    "Engine_Size": 2.6,
    "Horsepower": 187
  },
  {
    "Brand": "BMW",
    "Model_Year": 2012,
    "Price": 50202.2,
    "Mileage": 191256,
    "Engine_Size": 3.7,
    "Horsepower": 365
  },
  {
    "Brand": "BMW",
    "Model_Year": 2016,
    "Price": 48439.75,
    "Mileage": 140905,
    "Engine_Size": 3.7,
    "Horsepower": 253
  },
  {
    "Brand": "BMW",
    "Model_Year": 2023,
    "Price": 49014.75,
    "Mileage": 177905,
    "Engine_Size": 2.3,
    "Horsepower": 260
  },
  {
    "Brand": "Ford",
    "Model_Year": 2016,
    "Price": 40295.15,
    "Mileage": 136637,
    "Engine_Size": 1.5,
    "Horsepower": 304
  },
  {
    "Brand": "Ford",
    "Model_Year": 2012,
    "Price": 49414.4,
    "Mileage": 176252,
    "Engine_Size": 3.5,
    "Horsepower": 307
  },
  {
    "Brand": "Honda",
    "Model_Year": 2012,
    "Price": 45894.9,
    "Mileage": 23402,
    "Engine_Size": 1.5,
    "Horsepower": 285
  },
  {
    "Brand": "BMW",
    "Model_Year": 2017,
    "Price": 38253.15,
    "Mileage": 178917,
    "Engine_Size": 3.3,
    "Horsepower": 143
  },
  {
    "Brand": "BMW",
    "Model_Year": 2016,
    "Price": 52265.45,
    "Mileage": 80851,
    "Engine_Size": 3.8,
    "Horsepower": 180
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2020,
    "Price": 58010.3,
    "Mileage": 17834,
    "Engine_Size": 3.8,
    "Horsepower": 172
  },
  {
    "Brand": "Ford",
    "Model_Year": 2005,
    "Price": 39050.5,
    "Mileage": 72850,
    "Engine_Size": 4.0,
    "Horsepower": 143
  },
  {
    "Brand": "BMW",
    "Model_Year": 2017,
    "Price": 62941.0,
    "Mileage": 42180,
    "Engine_Size": 4.5,
    "Horsepower": 321
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2011,
    "Price": 40705.25,
    "Mileage": 139955,
    "Engine_Size": 3.0,
    "Horsepower": 183
  },
  {
    "Brand": "Honda",
    "Model_Year": 2009,
    "Price": 56289.6,
    "Mileage": 114688,
    "Engine_Size": 3.9,
    "Horsepower": 382
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2012,
    "Price": 56040.0,
    "Mileage": 111520,
    "Engine_Size": 3.5,
    "Horsepower": 399
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2018,
    "Price": 50497.25,
    "Mileage": 16695,
    "Engine_Size": 1.7,
    "Horsepower": 307
  },
  {
    "Brand": "Honda",
    "Model_Year": 2017,
    "Price": 38459.25,
    "Mileage": 132135,
    "Engine_Size": 1.1,
    "Horsepower": 242
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2019,
    "Price": 37386.25,
    "Mileage": 159195,
    "Engine_Size": 2.1,
    "Horsepower": 148
  },
  {
    "Brand": "BMW",
    "Model_Year": 2021,
    "Price": 47561.95,
    "Mileage": 63481,
    "Engine_Size": 2.8,
    "Horsepower": 162
  },
  {
    "Brand": "Ford",
    "Model_Year": 2019,
    "Price": 43804.1,
    "Mileage": 78438,
    "Engine_Size": 3.5,
    "Horsepower": 119
  },
  {
    "Brand": "Honda",
    "Model_Year": 2022,
    "Price": 61843.45,
    "Mileage": 116491,
    "Engine_Size": 4.4,
    "Horsepower": 354
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2022,
    "Price": 50138.75,
    "Mileage": 153645,
    "Engine_Size": 1.8,
    "Horsepower": 292
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2006,
    "Price": 24805.8,
    "Mileage": 126844,
    "Engine_Size": 1.5,
    "Horsepower": 150
  },
  {
    "Brand": "Honda",
    "Model_Year": 2008,
    "Price": 58255.5,
    "Mileage": 99910,
    "Engine_Size": 4.9,
    "Horsepower": 335
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2005,
    "Price": 34863.3,
    "Mileage": 61494,
    "Engine_Size": 1.4,
    "Horsepower": 224
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2008,
    "Price": 41915.0,
    "Mileage": 148360,
    "Engine_Size": 2.9,
    "Horsepower": 302
  },
  {
    "Brand": "Ford",
    "Model_Year": 2022,
    "Price": 65150.100000000006,
    "Mileage": 51978,
    "Engine_Size": 3.3,
    "Horsepower": 385
  },
  {
    "Brand": "BMW",
    "Model_Year": 2009,
    "Price": 48003.75,
    "Mileage": 122845,
    "Engine_Size": 3.2,
    "Horsepower": 305
  },
  {
    "Brand": "Ford",
    "Model_Year": 2023,
    "Price": 41973.95,
    "Mileage": 135621,
    "Engine_Size": 1.3,
    "Horsepower": 228
  },
  {
    "Brand": "Ford",
    "Model_Year": 2019,
    "Price": 50651.4,
    "Mileage": 59672,
    "Engine_Size": 1.2,
    "Horsepower": 385
  },
  {
    "Brand": "Ford",
    "Model_Year": 2012,
    "Price": 44069.95,
    "Mileage": 66821,
    "Engine_Size": 1.4,
    "Horsepower": 320
  },
  {
    "Brand": "Ford",
    "Model_Year": 2021,
    "Price": 62288.95,
    "Mileage": 88661,
    "Engine_Size": 3.3,
    "Horsepower": 383
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2005,
    "Price": 51557.8,
    "Mileage": 74224,
    "Engine_Size": 3.2,
    "Horsepower": 370
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2016,
    "Price": 50811.75,
    "Mileage": 94405,
    "Engine_Size": 1.9,
    "Horsepower": 351
  },
  {
    "Brand": "Honda",
    "Model_Year": 2023,
    "Price": 54806.2,
    "Mileage": 59796,
    "Engine_Size": 3.6,
    "Horsepower": 171
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2019,
    "Price": 47515.1,
    "Mileage": 180778,
    "Engine_Size": 4.3,
    "Horsepower": 120
  },
  {
    "Brand": "Ford",
    "Model_Year": 2013,
    "Price": 29757.3,
    "Mileage": 133554,
    "Engine_Size": 1.2,
    "Horsepower": 121
  },
  {
    "Brand": "Honda",
    "Model_Year": 2011,
    "Price": 44711.15,
    "Mileage": 128777,
    "Engine_Size": 3.0,
    "Horsepower": 278
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2006,
    "Price": 53773.85,
    "Mileage": 9023,
    "Engine_Size": 3.8,
    "Horsepower": 376
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2013,
    "Price": 36653.65,
    "Mileage": 172807,
    "Engine_Size": 2.0,
    "Horsepower": 200
  },
  {
    "Brand": "BMW",
    "Model_Year": 2014,
    "Price": 46810.05,
    "Mileage": 77959,
    "Engine_Size": 2.2,
    "Horsepower": 339
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2006,
    "Price": 45685.1,
    "Mileage": 44218,
    "Engine_Size": 3.5,
    "Horsepower": 274
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2023,
    "Price": 59302.75,
    "Mileage": 148285,
    "Engine_Size": 4.6,
    "Horsepower": 288
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2015,
    "Price": 59881.0,
    "Mileage": 33460,
    "Engine_Size": 4.2,
    "Horsepower": 326
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2017,
    "Price": 49002.05,
    "Mileage": 129579,
    "Engine_Size": 3.3,
    "Horsepower": 254
  },
  {
    "Brand": "BMW",
    "Model_Year": 2014,
    "Price": 52181.0,
    "Mileage": 69680,
    "Engine_Size": 3.9,
    "Horsepower": 214
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2018,
    "Price": 53720.15,
    "Mileage": 36017,
    "Engine_Size": 2.5,
    "Horsepower": 247
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2022,
    "Price": 46712.1,
    "Mileage": 97038,
    "Engine_Size": 3.6,
    "Horsepower": 83
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2023,
    "Price": 51958.9,
    "Mileage": 167062,
    "Engine_Size": 2.9,
    "Horsepower": 315
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2013,
    "Price": 44090.25,
    "Mileage": 24515,
    "Engine_Size": 1.8,
    "Horsepower": 256
  },
  {
    "Brand": "Honda",
    "Model_Year": 2011,
    "Price": 48221.85,
    "Mileage": 166063,
    "Engine_Size": 3.8,
    "Horsepower": 328
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2007,
    "Price": 33105.7,
    "Mileage": 143706,
    "Engine_Size": 3.2,
    "Horsepower": 109
  },
  {
    "Brand": "Ford",
    "Model_Year": 2010,
    "Price": 32770.55,
    "Mileage": 165449,
    "Engine_Size": 2.4,
    "Horsepower": 158
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2006,
    "Price": 47636.95,
    "Mileage": 38001,
    "Engine_Size": 4.6,
    "Horsepower": 194
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2010,
    "Price": 27241.45,
    "Mileage": 6391,
    "Engine_Size": 1.1,
    "Horsepower": 78
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2007,
    "Price": 34255.6,
    "Mileage": 114388,
    "Engine_Size": 2.3,
    "Horsepower": 153
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2020,
    "Price": 35089.25,
    "Mileage": 47215,
    "Engine_Size": 1.2,
    "Horsepower": 90
  },
  {
    "Brand": "BMW",
    "Model_Year": 2012,
    "Price": 59684.0,
    "Mileage": 84720,
    "Engine_Size": 4.1,
    "Horsepower": 350
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2006,
    "Price": 45025.3,
    "Mileage": 32114,
    "Engine_Size": 3.8,
    "Horsepower": 241
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2021,
    "Price": 42277.3,
    "Mileage": 147954,
    "Engine_Size": 2.3,
    "Horsepower": 94
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2013,
    "Price": 43069.9,
    "Mileage": 118142,
    "Engine_Size": 3.7,
    "Horsepower": 172
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2016,
    "Price": 46112.75,
    "Mileage": 153345,
    "Engine_Size": 2.6,
    "Horsepower": 259
  },
  {
    "Brand": "Honda",
    "Model_Year": 2007,
    "Price": 50275.7,
    "Mileage": 111206,
    "Engine_Size": 4.0,
    "Horsepower": 305
  },
  {
    "Brand": "Ford",
    "Model_Year": 2015,
    "Price": 53673.65,
    "Mileage": 50647,
    "Engine_Size": 2.8,
    "Horsepower": 382
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2005,
    "Price": 33584.05,
    "Mileage": 47679,
    "Engine_Size": 2.6,
    "Horsepower": 106
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2017,
    "Price": 67813.65,
    "Mileage": 5427,
    "Engine_Size": 4.7,
    "Horsepower": 341
  },
  {
    "Brand": "Honda",
    "Model_Year": 2019,
    "Price": 48730.55,
    "Mileage": 134669,
    "Engine_Size": 2.0,
    "Horsepower": 362
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2009,
    "Price": 34343.65,
    "Mileage": 71267,
    "Engine_Size": 1.5,
    "Horsepower": 221
  },
  {
    "Brand": "BMW",
    "Model_Year": 2021,
    "Price": 61806.05,
    "Mileage": 5799,
    "Engine_Size": 3.3,
    "Horsepower": 351
  },
  {
    "Brand": "Ford",
    "Model_Year": 2010,
    "Price": 44583.05,
    "Mileage": 60659,
    "Engine_Size": 4.9,
    "Horsepower": 89
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2015,
    "Price": 47324.75,
    "Mileage": 12025,
    "Engine_Size": 2.5,
    "Horsepower": 206
  },
  {
    "Brand": "Honda",
    "Model_Year": 2022,
    "Price": 41466.95,
    "Mileage": 19481,
    "Engine_Size": 1.2,
    "Horsepower": 98
  },
  {
    "Brand": "BMW",
    "Model_Year": 2008,
    "Price": 31390.45,
    "Mileage": 30411,
    "Engine_Size": 2.4,
    "Horsepower": 100
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2007,
    "Price": 29702.6,
    "Mileage": 110928,
    "Engine_Size": 3.0,
    "Horsepower": 88
  },
  {
    "Brand": "Honda",
    "Model_Year": 2017,
    "Price": 36937.3,
    "Mileage": 128014,
    "Engine_Size": 1.6,
    "Horsepower": 217
  },
  {
    "Brand": "Honda",
    "Model_Year": 2013,
    "Price": 49471.35,
    "Mileage": 151033,
    "Engine_Size": 3.6,
    "Horsepower": 352
  },
  {
    "Brand": "BMW",
    "Model_Year": 2010,
    "Price": 57252.05,
    "Mileage": 157839,
    "Engine_Size": 5.0,
    "Horsepower": 369
  },
  {
    "Brand": "Honda",
    "Model_Year": 2016,
    "Price": 52413.5,
    "Mileage": 56690,
    "Engine_Size": 2.8,
    "Horsepower": 232
  },
  {
    "Brand": "BMW",
    "Model_Year": 2006,
    "Price": 35605.5,
    "Mileage": 57870,
    "Engine_Size": 2.4,
    "Horsepower": 182
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2007,
    "Price": 34961.65,
    "Mileage": 172207,
    "Engine_Size": 2.6,
    "Horsepower": 219
  },
  {
    "Brand": "BMW",
    "Model_Year": 2007,
    "Price": 41983.6,
    "Mileage": 91928,
    "Engine_Size": 1.5,
    "Horsepower": 399
  },
  {
    "Brand": "BMW",
    "Model_Year": 2016,
    "Price": 61594.75,
    "Mileage": 75765,
    "Engine_Size": 4.5,
    "Horsepower": 324
  },
  {
    "Brand": "Ford",
    "Model_Year": 2019,
    "Price": 49125.4,
    "Mileage": 28772,
    "Engine_Size": 2.7,
    "Horsepower": 156
  },
  {
    "Brand": "BMW",
    "Model_Year": 2013,
    "Price": 35237.15,
    "Mileage": 135417,
    "Engine_Size": 2.5,
    "Horsepower": 167
  },
  {
    "Brand": "BMW",
    "Model_Year": 2012,
    "Price": 52873.05,
    "Mileage": 23799,
    "Engine_Size": 3.6,
    "Horsepower": 201
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2015,
    "Price": 54138.45,
    "Mileage": 117051,
    "Engine_Size": 2.8,
    "Horsepower": 381
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2020,
    "Price": 50121.95,
    "Mileage": 134941,
    "Engine_Size": 3.6,
    "Horsepower": 166
  },
  {
    "Brand": "Ford",
    "Model_Year": 2008,
    "Price": 29564.25,
    "Mileage": 28555,
    "Engine_Size": 1.2,
    "Horsepower": 167
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2005,
    "Price": 51921.4,
    "Mileage": 97152,
    "Engine_Size": 4.3,
    "Horsepower": 359
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2011,
    "Price": 58498.05,
    "Mileage": 132219,
    "Engine_Size": 4.8,
    "Horsepower": 296
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2006,
    "Price": 37024.75,
    "Mileage": 155405,
    "Engine_Size": 3.6,
    "Horsepower": 214
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2009,
    "Price": 47358.35,
    "Mileage": 140333,
    "Engine_Size": 4.8,
    "Horsepower": 225
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2011,
    "Price": 41570.35,
    "Mileage": 124833,
    "Engine_Size": 1.6,
    "Horsepower": 339
  },
  {
    "Brand": "BMW",
    "Model_Year": 2008,
    "Price": 43144.9,
    "Mileage": 74002,
    "Engine_Size": 2.9,
    "Horsepower": 231
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2009,
    "Price": 43112.35,
    "Mileage": 51553,
    "Engine_Size": 3.4,
    "Horsepower": 181
  },
  {
    "Brand": "Honda",
    "Model_Year": 2005,
    "Price": 48026.6,
    "Mileage": 8088,
    "Engine_Size": 3.3,
    "Horsepower": 254
  },
  {
    "Brand": "Ford",
    "Model_Year": 2005,
    "Price": 40903.85,
    "Mileage": 50783,
    "Engine_Size": 2.6,
    "Horsepower": 274
  },
  {
    "Brand": "Honda",
    "Model_Year": 2019,
    "Price": 44200.25,
    "Mileage": 6115,
    "Engine_Size": 2.4,
    "Horsepower": 166
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2023,
    "Price": 39790.6,
    "Mileage": 77908,
    "Engine_Size": 1.5,
    "Horsepower": 124
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2014,
    "Price": 40619.55,
    "Mileage": 74109,
    "Engine_Size": 2.6,
    "Horsepower": 186
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2022,
    "Price": 47625.1,
    "Mileage": 7978,
    "Engine_Size": 1.7,
    "Horsepower": 162
  },
  {
    "Brand": "Ford",
    "Model_Year": 2007,
    "Price": 48770.85,
    "Mileage": 113943,
    "Engine_Size": 3.9,
    "Horsepower": 362
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2015,
    "Price": 48364.9,
    "Mileage": 14422,
    "Engine_Size": 1.8,
    "Horsepower": 273
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2019,
    "Price": 44203.1,
    "Mileage": 179698,
    "Engine_Size": 1.2,
    "Horsepower": 351
  },
  {
    "Brand": "Ford",
    "Model_Year": 2015,
    "Price": 49498.35,
    "Mileage": 94233,
    "Engine_Size": 3.2,
    "Horsepower": 258
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2021,
    "Price": 63374.3,
    "Mileage": 61174,
    "Engine_Size": 3.4,
    "Horsepower": 392
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2021,
    "Price": 57439.85,
    "Mileage": 42743,
    "Engine_Size": 4.5,
    "Horsepower": 153
  },
  {
    "Brand": "Ford",
    "Model_Year": 2010,
    "Price": 38322.45,
    "Mileage": 193271,
    "Engine_Size": 3.3,
    "Horsepower": 249
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2009,
    "Price": 43850.6,
    "Mileage": 135288,
    "Engine_Size": 2.4,
    "Horsepower": 343
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2012,
    "Price": 47877.0,
    "Mileage": 134000,
    "Engine_Size": 4.2,
    "Horsepower": 250
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2006,
    "Price": 41589.1,
    "Mileage": 127778,
    "Engine_Size": 3.2,
    "Horsepower": 250
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2020,
    "Price": 49092.5,
    "Mileage": 34430,
    "Engine_Size": 1.3,
    "Horsepower": 352
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2016,
    "Price": 56084.3,
    "Mileage": 33834,
    "Engine_Size": 3.3,
    "Horsepower": 356
  },
  {
    "Brand": "BMW",
    "Model_Year": 2010,
    "Price": 51440.25,
    "Mileage": 29435,
    "Engine_Size": 4.6,
    "Horsepower": 175
  },
  {
    "Brand": "BMW",
    "Model_Year": 2005,
    "Price": 31797.4,
    "Mileage": 92212,
    "Engine_Size": 2.6,
    "Horsepower": 198
  },
  {
    "Brand": "BMW",
    "Model_Year": 2008,
    "Price": 42291.15,
    "Mileage": 60797,
    "Engine_Size": 2.2,
    "Horsepower": 331
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2021,
    "Price": 32998.7,
    "Mileage": 179626,
    "Engine_Size": 1.6,
    "Horsepower": 80
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2017,
    "Price": 42017.25,
    "Mileage": 59555,
    "Engine_Size": 1.6,
    "Horsepower": 231
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2022,
    "Price": 56364.5,
    "Mileage": 90350,
    "Engine_Size": 2.7,
    "Horsepower": 250
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2009,
    "Price": 51684.2,
    "Mileage": 19716,
    "Engine_Size": 3.4,
    "Horsepower": 282
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2007,
    "Price": 37704.95,
    "Mileage": 65261,
    "Engine_Size": 1.3,
    "Horsepower": 343
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2015,
    "Price": 42420.0,
    "Mileage": 163600,
    "Engine_Size": 4.8,
    "Horsepower": 90
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2017,
    "Price": 63310.25,
    "Mileage": 6995,
    "Engine_Size": 4.0,
    "Horsepower": 344
  },
  {
    "Brand": "BMW",
    "Model_Year": 2008,
    "Price": 52070.3,
    "Mileage": 27414,
    "Engine_Size": 3.3,
    "Horsepower": 329
  },
  {
    "Brand": "Honda",
    "Model_Year": 2018,
    "Price": 50371.2,
    "Mileage": 149916,
    "Engine_Size": 4.3,
    "Horsepower": 185
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2015,
    "Price": 26880.45,
    "Mileage": 172731,
    "Engine_Size": 1.3,
    "Horsepower": 94
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2014,
    "Price": 54452.9,
    "Mileage": 20522,
    "Engine_Size": 2.9,
    "Horsepower": 323
  },
  {
    "Brand": "BMW",
    "Model_Year": 2023,
    "Price": 57872.4,
    "Mileage": 134632,
    "Engine_Size": 3.5,
    "Horsepower": 280
  },
  {
    "Brand": "Honda",
    "Model_Year": 2022,
    "Price": 64624.3,
    "Mileage": 79034,
    "Engine_Size": 4.3,
    "Horsepower": 374
  },
  {
    "Brand": "Honda",
    "Model_Year": 2010,
    "Price": 57917.9,
    "Mileage": 47322,
    "Engine_Size": 4.1,
    "Horsepower": 390
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2019,
    "Price": 51612.1,
    "Mileage": 72638,
    "Engine_Size": 2.1,
    "Horsepower": 326
  },
  {
    "Brand": "Ford",
    "Model_Year": 2014,
    "Price": 53066.3,
    "Mileage": 106334,
    "Engine_Size": 4.8,
    "Horsepower": 237
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2009,
    "Price": 27639.2,
    "Mileage": 144596,
    "Engine_Size": 1.5,
    "Horsepower": 90
  },
  {
    "Brand": "Honda",
    "Model_Year": 2009,
    "Price": 48857.7,
    "Mileage": 35846,
    "Engine_Size": 4.5,
    "Horsepower": 155
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2014,
    "Price": 48761.85,
    "Mileage": 78643,
    "Engine_Size": 4.9,
    "Horsepower": 84
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2009,
    "Price": 26542.6,
    "Mileage": 196168,
    "Engine_Size": 1.7,
    "Horsepower": 119
  },
  {
    "Brand": "BMW",
    "Model_Year": 2007,
    "Price": 48207.5,
    "Mileage": 119930,
    "Engine_Size": 3.9,
    "Horsepower": 373
  },
  {
    "Brand": "Ford",
    "Model_Year": 2010,
    "Price": 34444.25,
    "Mileage": 183775,
    "Engine_Size": 1.2,
    "Horsepower": 374
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2008,
    "Price": 40926.05,
    "Mileage": 29399,
    "Engine_Size": 2.6,
    "Horsepower": 265
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2022,
    "Price": 57030.9,
    "Mileage": 128182,
    "Engine_Size": 3.1,
    "Horsepower": 370
  },
  {
    "Brand": "BMW",
    "Model_Year": 2013,
    "Price": 55565.45,
    "Mileage": 53591,
    "Engine_Size": 3.3,
    "Horsepower": 357
  },
  {
    "Brand": "Honda",
    "Model_Year": 2021,
    "Price": 63774.7,
    "Mileage": 156786,
    "Engine_Size": 4.7,
    "Horsepower": 314
  },
  {
    "Brand": "Honda",
    "Model_Year": 2017,
    "Price": 56644.15,
    "Mileage": 40877,
    "Engine_Size": 3.7,
    "Horsepower": 270
  },
  {
    "Brand": "BMW",
    "Model_Year": 2019,
    "Price": 51136.7,
    "Mileage": 89106,
    "Engine_Size": 2.9,
    "Horsepower": 262
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2021,
    "Price": 54666.1,
    "Mileage": 83018,
    "Engine_Size": 4.2,
    "Horsepower": 215
  },
  {
    "Brand": "Honda",
    "Model_Year": 2017,
    "Price": 61857.3,
    "Mileage": 104854,
    "Engine_Size": 4.8,
    "Horsepower": 379
  },
  {
    "Brand": "Ford",
    "Model_Year": 2020,
    "Price": 33229.6,
    "Mileage": 195208,
    "Engine_Size": 1.1,
    "Horsepower": 196
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2008,
    "Price": 43917.7,
    "Mileage": 169486,
    "Engine_Size": 4.9,
    "Horsepower": 244
  },
  {
    "Brand": "Ford",
    "Model_Year": 2009,
    "Price": 30580.4,
    "Mileage": 125832,
    "Engine_Size": 1.3,
    "Horsepower": 203
  },
  {
    "Brand": "Honda",
    "Model_Year": 2009,
    "Price": 41275.2,
    "Mileage": 91576,
    "Engine_Size": 4.3,
    "Horsepower": 135
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2013,
    "Price": 42871.0,
    "Mileage": 181540,
    "Engine_Size": 2.1,
    "Horsepower": 348
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2021,
    "Price": 48990.6,
    "Mileage": 97508,
    "Engine_Size": 1.5,
    "Horsepower": 315
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2017,
    "Price": 53218.25,
    "Mileage": 51835,
    "Engine_Size": 2.8,
    "Horsepower": 306
  },
  {
    "Brand": "BMW",
    "Model_Year": 2006,
    "Price": 42166.75,
    "Mileage": 199405,
    "Engine_Size": 3.6,
    "Horsepower": 240
  },
  {
    "Brand": "BMW",
    "Model_Year": 2017,
    "Price": 41644.8,
    "Mileage": 47464,
    "Engine_Size": 2.5,
    "Horsepower": 120
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2023,
    "Price": 53548.3,
    "Mileage": 117454,
    "Engine_Size": 1.2,
    "Horsepower": 397
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2007,
    "Price": 37147.25,
    "Mileage": 158995,
    "Engine_Size": 3.4,
    "Horsepower": 222
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2014,
    "Price": 49289.9,
    "Mileage": 121062,
    "Engine_Size": 4.6,
    "Horsepower": 149
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2006,
    "Price": 30140.65,
    "Mileage": 197927,
    "Engine_Size": 2.5,
    "Horsepower": 214
  },
  {
    "Brand": "BMW",
    "Model_Year": 2017,
    "Price": 50479.75,
    "Mileage": 72445,
    "Engine_Size": 1.9,
    "Horsepower": 343
  },
  {
    "Brand": "BMW",
    "Model_Year": 2023,
    "Price": 53286.3,
    "Mileage": 115454,
    "Engine_Size": 2.8,
    "Horsepower": 224
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2021,
    "Price": 48716.7,
    "Mileage": 126906,
    "Engine_Size": 1.2,
    "Horsepower": 394
  },
  {
    "Brand": "Ford",
    "Model_Year": 2018,
    "Price": 52442.8,
    "Mileage": 103384,
    "Engine_Size": 4.3,
    "Horsepower": 212
  },
  {
    "Brand": "Honda",
    "Model_Year": 2016,
    "Price": 53830.1,
    "Mileage": 182218,
    "Engine_Size": 4.3,
    "Horsepower": 367
  },
  {
    "Brand": "BMW",
    "Model_Year": 2016,
    "Price": 43859.4,
    "Mileage": 65032,
    "Engine_Size": 3.4,
    "Horsepower": 103
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2015,
    "Price": 47752.95,
    "Mileage": 118521,
    "Engine_Size": 2.4,
    "Horsepower": 373
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2011,
    "Price": 54468.1,
    "Mileage": 121378,
    "Engine_Size": 4.2,
    "Horsepower": 308
  },
  {
    "Brand": "BMW",
    "Model_Year": 2008,
    "Price": 44900.0,
    "Mileage": 22140,
    "Engine_Size": 3.2,
    "Horsepower": 207
  },
  {
    "Brand": "Ford",
    "Model_Year": 2023,
    "Price": 68405.5,
    "Mileage": 7670,
    "Engine_Size": 4.3,
    "Horsepower": 323
  },
  {
    "Brand": "Ford",
    "Model_Year": 2005,
    "Price": 36102.05,
    "Mileage": 41519,
    "Engine_Size": 3.5,
    "Horsepower": 74
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2007,
    "Price": 46391.4,
    "Mileage": 49512,
    "Engine_Size": 4.1,
    "Horsepower": 245
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2017,
    "Price": 50048.85,
    "Mileage": 193883,
    "Engine_Size": 3.4,
    "Horsepower": 283
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2019,
    "Price": 37653.75,
    "Mileage": 108565,
    "Engine_Size": 2.7,
    "Horsepower": 92
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2006,
    "Price": 55442.85,
    "Mileage": 150763,
    "Engine_Size": 4.8,
    "Horsepower": 387
  },
  {
    "Brand": "Honda",
    "Model_Year": 2015,
    "Price": 43867.2,
    "Mileage": 110156,
    "Engine_Size": 3.2,
    "Horsepower": 82
  },
  {
    "Brand": "Honda",
    "Model_Year": 2008,
    "Price": 46563.3,
    "Mileage": 170334,
    "Engine_Size": 3.4,
    "Horsepower": 310
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2023,
    "Price": 50432.8,
    "Mileage": 190964,
    "Engine_Size": 1.9,
    "Horsepower": 345
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2021,
    "Price": 54949.25,
    "Mileage": 30595,
    "Engine_Size": 3.5,
    "Horsepower": 161
  },
  {
    "Brand": "BMW",
    "Model_Year": 2007,
    "Price": 30423.050000000003,
    "Mileage": 193279,
    "Engine_Size": 3.3,
    "Horsepower": 177
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2022,
    "Price": 42277.4,
    "Mileage": 169512,
    "Engine_Size": 1.7,
    "Horsepower": 298
  },
  {
    "Brand": "BMW",
    "Model_Year": 2012,
    "Price": 37921.5,
    "Mileage": 13630,
    "Engine_Size": 1.2,
    "Horsepower": 221
  },
  {
    "Brand": "Ford",
    "Model_Year": 2023,
    "Price": 52691.9,
    "Mileage": 167322,
    "Engine_Size": 3.4,
    "Horsepower": 177
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2009,
    "Price": 53431.95,
    "Mileage": 112461,
    "Engine_Size": 4.1,
    "Horsepower": 358
  },
  {
    "Brand": "Ford",
    "Model_Year": 2011,
    "Price": 44424.45,
    "Mileage": 79191,
    "Engine_Size": 3.1,
    "Horsepower": 245
  },
  {
    "Brand": "Honda",
    "Model_Year": 2012,
    "Price": 44849.45,
    "Mileage": 105591,
    "Engine_Size": 1.9,
    "Horsepower": 389
  },
  {
    "Brand": "Honda",
    "Model_Year": 2009,
    "Price": 53267.35,
    "Mileage": 68753,
    "Engine_Size": 3.7,
    "Horsepower": 355
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2021,
    "Price": 53190.0,
    "Mileage": 65520,
    "Engine_Size": 1.3,
    "Horsepower": 398
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2009,
    "Price": 49898.6,
    "Mileage": 9008,
    "Engine_Size": 2.8,
    "Horsepower": 310
  },
  {
    "Brand": "Ford",
    "Model_Year": 2008,
    "Price": 26968.2,
    "Mileage": 180536,
    "Engine_Size": 1.7,
    "Horsepower": 214
  },
  {
    "Brand": "BMW",
    "Model_Year": 2023,
    "Price": 38366.6,
    "Mileage": 112408,
    "Engine_Size": 1.7,
    "Horsepower": 83
  },
  {
    "Brand": "Honda",
    "Model_Year": 2006,
    "Price": 46507.2,
    "Mileage": 5496,
    "Engine_Size": 1.8,
    "Horsepower": 344
  },
  {
    "Brand": "Honda",
    "Model_Year": 2015,
    "Price": 41976.65,
    "Mileage": 104767,
    "Engine_Size": 2.5,
    "Horsepower": 140
  },
  {
    "Brand": "BMW",
    "Model_Year": 2017,
    "Price": 53642.4,
    "Mileage": 28212,
    "Engine_Size": 1.2,
    "Horsepower": 384
  },
  {
    "Brand": "Ford",
    "Model_Year": 2019,
    "Price": 55546.15,
    "Mileage": 25637,
    "Engine_Size": 2.6,
    "Horsepower": 264
  },
  {
    "Brand": "Ford",
    "Model_Year": 2016,
    "Price": 58723.65,
    "Mileage": 50227,
    "Engine_Size": 3.0,
    "Horsepower": 369
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2015,
    "Price": 40167.35,
    "Mileage": 124753,
    "Engine_Size": 2.9,
    "Horsepower": 80
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2011,
    "Price": 37383.1,
    "Mileage": 125118,
    "Engine_Size": 2.5,
    "Horsepower": 175
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2009,
    "Price": 59839.8,
    "Mileage": 14884,
    "Engine_Size": 4.4,
    "Horsepower": 327
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2021,
    "Price": 44144.95,
    "Mileage": 121481,
    "Engine_Size": 1.6,
    "Horsepower": 265
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2013,
    "Price": 45774.05,
    "Mileage": 73259,
    "Engine_Size": 3.0,
    "Horsepower": 214
  },
  {
    "Brand": "Honda",
    "Model_Year": 2018,
    "Price": 46348.5,
    "Mileage": 54810,
    "Engine_Size": 1.2,
    "Horsepower": 289
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2016,
    "Price": 40118.7,
    "Mileage": 134926,
    "Engine_Size": 1.3,
    "Horsepower": 243
  },
  {
    "Brand": "Ford",
    "Model_Year": 2010,
    "Price": 50829.95,
    "Mileage": 9761,
    "Engine_Size": 3.3,
    "Horsepower": 285
  },
  {
    "Brand": "BMW",
    "Model_Year": 2021,
    "Price": 53547.25,
    "Mileage": 21375,
    "Engine_Size": 3.3,
    "Horsepower": 162
  },
  {
    "Brand": "Ford",
    "Model_Year": 2023,
    "Price": 62769.5,
    "Mileage": 161290,
    "Engine_Size": 4.5,
    "Horsepower": 329
  },
  {
    "Brand": "Honda",
    "Model_Year": 2023,
    "Price": 47503.15,
    "Mileage": 166637,
    "Engine_Size": 3.2,
    "Horsepower": 132
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2020,
    "Price": 52358.3,
    "Mileage": 107654,
    "Engine_Size": 4.8,
    "Horsepower": 98
  },
  {
    "Brand": "Ford",
    "Model_Year": 2016,
    "Price": 46861.25,
    "Mileage": 37975,
    "Engine_Size": 1.2,
    "Horsepower": 344
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2016,
    "Price": 45894.75,
    "Mileage": 163145,
    "Engine_Size": 1.4,
    "Horsepower": 354
  },
  {
    "Brand": "Honda",
    "Model_Year": 2010,
    "Price": 26078.25,
    "Mileage": 137955,
    "Engine_Size": 1.2,
    "Horsepower": 139
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2008,
    "Price": 37435.95,
    "Mileage": 185701,
    "Engine_Size": 1.7,
    "Horsepower": 348
  },
  {
    "Brand": "BMW",
    "Model_Year": 2010,
    "Price": 48990.55,
    "Mileage": 79489,
    "Engine_Size": 3.2,
    "Horsepower": 300
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2015,
    "Price": 61481.95,
    "Mileage": 13381,
    "Engine_Size": 3.6,
    "Horsepower": 371
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2005,
    "Price": 32713.5,
    "Mileage": 159310,
    "Engine_Size": 1.2,
    "Horsepower": 324
  },
  {
    "Brand": "Honda",
    "Model_Year": 2019,
    "Price": 61136.65,
    "Mileage": 149867,
    "Engine_Size": 4.8,
    "Horsepower": 241
  },
  {
    "Brand": "BMW",
    "Model_Year": 2015,
    "Price": 55196.05,
    "Mileage": 67999,
    "Engine_Size": 4.4,
    "Horsepower": 249
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2023,
    "Price": 57630.65,
    "Mileage": 54907,
    "Engine_Size": 2.2,
    "Horsepower": 333
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2022,
    "Price": 44098.5,
    "Mileage": 145710,
    "Engine_Size": 1.3,
    "Horsepower": 252
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2021,
    "Price": 52187.65,
    "Mileage": 75467,
    "Engine_Size": 1.7,
    "Horsepower": 391
  },
  {
    "Brand": "Honda",
    "Model_Year": 2023,
    "Price": 48810.85,
    "Mileage": 47623,
    "Engine_Size": 1.5,
    "Horsepower": 274
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2018,
    "Price": 42510.8,
    "Mileage": 174564,
    "Engine_Size": 1.5,
    "Horsepower": 318
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2022,
    "Price": 49313.85,
    "Mileage": 162483,
    "Engine_Size": 3.1,
    "Horsepower": 282
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2023,
    "Price": 48996.8,
    "Mileage": 115724,
    "Engine_Size": 2.0,
    "Horsepower": 228
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2019,
    "Price": 40613.7,
    "Mileage": 156606,
    "Engine_Size": 2.4,
    "Horsepower": 169
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2019,
    "Price": 63651.350000000006,
    "Mileage": 165253,
    "Engine_Size": 5.0,
    "Horsepower": 386
  },
  {
    "Brand": "BMW",
    "Model_Year": 2008,
    "Price": 41675.55,
    "Mileage": 108069,
    "Engine_Size": 3.7,
    "Horsepower": 181
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2011,
    "Price": 63253.2,
    "Mileage": 24996,
    "Engine_Size": 4.8,
    "Horsepower": 377
  },
  {
    "Brand": "Ford",
    "Model_Year": 2017,
    "Price": 39684.9,
    "Mileage": 110682,
    "Engine_Size": 1.6,
    "Horsepower": 235
  },
  {
    "Brand": "Honda",
    "Model_Year": 2007,
    "Price": 34114.55,
    "Mileage": 88609,
    "Engine_Size": 2.5,
    "Horsepower": 105
  },
  {
    "Brand": "Honda",
    "Model_Year": 2020,
    "Price": 48374.15,
    "Mileage": 165477,
    "Engine_Size": 3.2,
    "Horsepower": 181
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2013,
    "Price": 32178.5,
    "Mileage": 106490,
    "Engine_Size": 1.3,
    "Horsepower": 156
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2012,
    "Price": 35909.75,
    "Mileage": 76325,
    "Engine_Size": 1.0,
    "Horsepower": 252
  },
  {
    "Brand": "Honda",
    "Model_Year": 2017,
    "Price": 51072.5,
    "Mileage": 33930,
    "Engine_Size": 3.7,
    "Horsepower": 154
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2021,
    "Price": 56679.7,
    "Mileage": 119426,
    "Engine_Size": 3.6,
    "Horsepower": 338
  },
  {
    "Brand": "BMW",
    "Model_Year": 2021,
    "Price": 50875.55,
    "Mileage": 22529,
    "Engine_Size": 2.6,
    "Horsepower": 234
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2021,
    "Price": 62939.7,
    "Mileage": 58546,
    "Engine_Size": 3.0,
    "Horsepower": 372
  },
  {
    "Brand": "Honda",
    "Model_Year": 2005,
    "Price": 39138.9,
    "Mileage": 12942,
    "Engine_Size": 2.7,
    "Horsepower": 159
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2012,
    "Price": 38931.6,
    "Mileage": 12548,
    "Engine_Size": 1.1,
    "Horsepower": 307
  },
  {
    "Brand": "Honda",
    "Model_Year": 2023,
    "Price": 41423.6,
    "Mileage": 120248,
    "Engine_Size": 2.3,
    "Horsepower": 91
  },
  {
    "Brand": "Ford",
    "Model_Year": 2010,
    "Price": 33935.6,
    "Mileage": 154368,
    "Engine_Size": 1.7,
    "Horsepower": 236
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2007,
    "Price": 32764.6,
    "Mileage": 187088,
    "Engine_Size": 1.4,
    "Horsepower": 284
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2009,
    "Price": 42636.0,
    "Mileage": 102780,
    "Engine_Size": 4.8,
    "Horsepower": 127
  },
  {
    "Brand": "Honda",
    "Model_Year": 2017,
    "Price": 48296.2,
    "Mileage": 5296,
    "Engine_Size": 3.4,
    "Horsepower": 99
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2019,
    "Price": 55928.75,
    "Mileage": 72945,
    "Engine_Size": 3.9,
    "Horsepower": 175
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2018,
    "Price": 52214.0,
    "Mileage": 64980,
    "Engine_Size": 2.3,
    "Horsepower": 399
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2020,
    "Price": 54600.9,
    "Mileage": 61782,
    "Engine_Size": 2.6,
    "Horsepower": 236
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2022,
    "Price": 41832.95,
    "Mileage": 170301,
    "Engine_Size": 1.9,
    "Horsepower": 223
  },
  {
    "Brand": "Honda",
    "Model_Year": 2015,
    "Price": 49188.9,
    "Mileage": 101382,
    "Engine_Size": 1.4,
    "Horsepower": 396
  },
  {
    "Brand": "Ford",
    "Model_Year": 2007,
    "Price": 27787.8,
    "Mileage": 58444,
    "Engine_Size": 1.7,
    "Horsepower": 76
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2014,
    "Price": 60414.2,
    "Mileage": 40036,
    "Engine_Size": 4.2,
    "Horsepower": 266
  },
  {
    "Brand": "Honda",
    "Model_Year": 2014,
    "Price": 61320.9,
    "Mileage": 44322,
    "Engine_Size": 3.7,
    "Horsepower": 390
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2020,
    "Price": 41287.05,
    "Mileage": 163239,
    "Engine_Size": 3.2,
    "Horsepower": 115
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2016,
    "Price": 43725.65,
    "Mileage": 56667,
    "Engine_Size": 2.9,
    "Horsepower": 87
  },
  {
    "Brand": "BMW",
    "Model_Year": 2006,
    "Price": 50340.65,
    "Mileage": 99527,
    "Engine_Size": 4.7,
    "Horsepower": 222
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2013,
    "Price": 42152.15,
    "Mileage": 88337,
    "Engine_Size": 1.3,
    "Horsepower": 333
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2007,
    "Price": 33451.6,
    "Mileage": 56468,
    "Engine_Size": 2.1,
    "Horsepower": 143
  },
  {
    "Brand": "BMW",
    "Model_Year": 2019,
    "Price": 49533.3,
    "Mileage": 77894,
    "Engine_Size": 2.4,
    "Horsepower": 214
  },
  {
    "Brand": "Honda",
    "Model_Year": 2007,
    "Price": 40078.2,
    "Mileage": 189156,
    "Engine_Size": 4.1,
    "Horsepower": 171
  },
  {
    "Brand": "Ford",
    "Model_Year": 2023,
    "Price": 65675.1,
    "Mileage": 68138,
    "Engine_Size": 5.0,
    "Horsepower": 190
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2022,
    "Price": 54487.6,
    "Mileage": 27588,
    "Engine_Size": 2.0,
    "Horsepower": 245
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2012,
    "Price": 51810.95,
    "Mileage": 67901,
    "Engine_Size": 4.5,
    "Horsepower": 132
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2021,
    "Price": 65440.85,
    "Mileage": 153743,
    "Engine_Size": 4.3,
    "Horsepower": 365
  },
  {
    "Brand": "Honda",
    "Model_Year": 2012,
    "Price": 37327.1,
    "Mileage": 88038,
    "Engine_Size": 1.9,
    "Horsepower": 153
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2011,
    "Price": 34369.15,
    "Mileage": 167717,
    "Engine_Size": 2.6,
    "Horsepower": 84
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2011,
    "Price": 40104.55,
    "Mileage": 143709,
    "Engine_Size": 2.6,
    "Horsepower": 203
  },
  {
    "Brand": "Honda",
    "Model_Year": 2007,
    "Price": 44559.4,
    "Mileage": 136732,
    "Engine_Size": 4.9,
    "Horsepower": 190
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2005,
    "Price": 40246.45,
    "Mileage": 112211,
    "Engine_Size": 1.7,
    "Horsepower": 388
  },
  {
    "Brand": "Ford",
    "Model_Year": 2008,
    "Price": 51719.9,
    "Mileage": 11922,
    "Engine_Size": 4.2,
    "Horsepower": 197
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2009,
    "Price": 48723.15,
    "Mileage": 98697,
    "Engine_Size": 2.3,
    "Horsepower": 357
  },
  {
    "Brand": "Honda",
    "Model_Year": 2005,
    "Price": 45980.35,
    "Mileage": 180793,
    "Engine_Size": 3.9,
    "Horsepower": 370
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2019,
    "Price": 46163.6,
    "Mileage": 193328,
    "Engine_Size": 2.7,
    "Horsepower": 249
  },
  {
    "Brand": "Honda",
    "Model_Year": 2009,
    "Price": 41580.15,
    "Mileage": 122217,
    "Engine_Size": 3.3,
    "Horsepower": 151
  },
  {
    "Brand": "Ford",
    "Model_Year": 2017,
    "Price": 51293.7,
    "Mileage": 74506,
    "Engine_Size": 4.3,
    "Horsepower": 82
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2012,
    "Price": 43731.1,
    "Mileage": 129338,
    "Engine_Size": 4.2,
    "Horsepower": 93
  },
  {
    "Brand": "BMW",
    "Model_Year": 2012,
    "Price": 58038.85,
    "Mileage": 32843,
    "Engine_Size": 4.5,
    "Horsepower": 237
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2009,
    "Price": 32995.1,
    "Mileage": 145118,
    "Engine_Size": 1.2,
    "Horsepower": 339
  },
  {
    "Brand": "BMW",
    "Model_Year": 2013,
    "Price": 46430.8,
    "Mileage": 108064,
    "Engine_Size": 3.8,
    "Horsepower": 139
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2005,
    "Price": 34816.15,
    "Mileage": 131417,
    "Engine_Size": 1.6,
    "Horsepower": 387
  },
  {
    "Brand": "Ford",
    "Model_Year": 2008,
    "Price": 36951.75,
    "Mileage": 121585,
    "Engine_Size": 2.7,
    "Horsepower": 158
  },
  {
    "Brand": "BMW",
    "Model_Year": 2007,
    "Price": 48155.7,
    "Mileage": 35346,
    "Engine_Size": 3.2,
    "Horsepower": 258
  },
  {
    "Brand": "Honda",
    "Model_Year": 2006,
    "Price": 38483.4,
    "Mileage": 128152,
    "Engine_Size": 2.6,
    "Horsepower": 326
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2012,
    "Price": 46735.55,
    "Mileage": 116769,
    "Engine_Size": 3.1,
    "Horsepower": 286
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2013,
    "Price": 46858.45,
    "Mileage": 107391,
    "Engine_Size": 5.0,
    "Horsepower": 101
  },
  {
    "Brand": "BMW",
    "Model_Year": 2006,
    "Price": 27120.1,
    "Mileage": 189598,
    "Engine_Size": 1.5,
    "Horsepower": 210
  },
  {
    "Brand": "BMW",
    "Model_Year": 2018,
    "Price": 53473.85,
    "Mileage": 78143,
    "Engine_Size": 3.7,
    "Horsepower": 230
  },
  {
    "Brand": "Ford",
    "Model_Year": 2018,
    "Price": 44897.65,
    "Mileage": 41787,
    "Engine_Size": 2.6,
    "Horsepower": 101
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2008,
    "Price": 42285.85,
    "Mileage": 38583,
    "Engine_Size": 1.5,
    "Horsepower": 381
  },
  {
    "Brand": "BMW",
    "Model_Year": 2010,
    "Price": 34788.25,
    "Mileage": 148635,
    "Engine_Size": 1.6,
    "Horsepower": 221
  },
  {
    "Brand": "BMW",
    "Model_Year": 2015,
    "Price": 55086.4,
    "Mileage": 182132,
    "Engine_Size": 4.8,
    "Horsepower": 329
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2007,
    "Price": 49433.85,
    "Mileage": 126943,
    "Engine_Size": 4.5,
    "Horsepower": 285
  },
  {
    "Brand": "Honda",
    "Model_Year": 2012,
    "Price": 52885.9,
    "Mileage": 169762,
    "Engine_Size": 4.6,
    "Horsepower": 348
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2007,
    "Price": 55241.35,
    "Mileage": 116233,
    "Engine_Size": 5.0,
    "Horsepower": 354
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2018,
    "Price": 44650.75,
    "Mileage": 19925,
    "Engine_Size": 1.8,
    "Horsepower": 167
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2017,
    "Price": 39676.8,
    "Mileage": 88184,
    "Engine_Size": 2.4,
    "Horsepower": 99
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2017,
    "Price": 43232.0,
    "Mileage": 156180,
    "Engine_Size": 3.7,
    "Horsepower": 159
  },
  {
    "Brand": "Honda",
    "Model_Year": 2006,
    "Price": 41002.25,
    "Mileage": 81515,
    "Engine_Size": 2.9,
    "Horsepower": 217
  },
  {
    "Brand": "Ford",
    "Model_Year": 2017,
    "Price": 46108.65,
    "Mileage": 141427,
    "Engine_Size": 2.7,
    "Horsepower": 213
  },
  {
    "Brand": "Ford",
    "Model_Year": 2023,
    "Price": 49092.55,
    "Mileage": 51069,
    "Engine_Size": 2.4,
    "Horsepower": 136
  },
  {
    "Brand": "BMW",
    "Model_Year": 2010,
    "Price": 36648.3,
    "Mileage": 105854,
    "Engine_Size": 3.4,
    "Horsepower": 127
  },
  {
    "Brand": "BMW",
    "Model_Year": 2020,
    "Price": 63187.45,
    "Mileage": 59471,
    "Engine_Size": 3.3,
    "Horsepower": 350
  },
  {
    "Brand": "Ford",
    "Model_Year": 2006,
    "Price": 42942.75,
    "Mileage": 37705,
    "Engine_Size": 1.6,
    "Horsepower": 348
  },
  {
    "Brand": "BMW",
    "Model_Year": 2012,
    "Price": 43919.95,
    "Mileage": 179981,
    "Engine_Size": 2.9,
    "Horsepower": 305
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2021,
    "Price": 50846.95,
    "Mileage": 133501,
    "Engine_Size": 3.2,
    "Horsepower": 197
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2006,
    "Price": 41307.95,
    "Mileage": 121361,
    "Engine_Size": 3.3,
    "Horsepower": 278
  },
  {
    "Brand": "BMW",
    "Model_Year": 2014,
    "Price": 33794.45,
    "Mileage": 189811,
    "Engine_Size": 1.8,
    "Horsepower": 255
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2020,
    "Price": 58699.35,
    "Mileage": 92273,
    "Engine_Size": 4.0,
    "Horsepower": 238
  },
  {
    "Brand": "BMW",
    "Model_Year": 2010,
    "Price": 38830.95,
    "Mileage": 28241,
    "Engine_Size": 1.1,
    "Horsepower": 241
  },
  {
    "Brand": "Honda",
    "Model_Year": 2006,
    "Price": 34187.7,
    "Mileage": 163486,
    "Engine_Size": 2.4,
    "Horsepower": 329
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2006,
    "Price": 48981.1,
    "Mileage": 55818,
    "Engine_Size": 4.1,
    "Horsepower": 274
  },
  {
    "Brand": "Honda",
    "Model_Year": 2017,
    "Price": 49682.65,
    "Mileage": 156967,
    "Engine_Size": 3.3,
    "Horsepower": 204
  },
  {
    "Brand": "Honda",
    "Model_Year": 2019,
    "Price": 41378.65,
    "Mileage": 97307,
    "Engine_Size": 2.0,
    "Horsepower": 115
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2006,
    "Price": 31620.95,
    "Mileage": 198481,
    "Engine_Size": 3.8,
    "Horsepower": 78
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2011,
    "Price": 42651.2,
    "Mileage": 191396,
    "Engine_Size": 3.3,
    "Horsepower": 230
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2007,
    "Price": 52891.0,
    "Mileage": 71920,
    "Engine_Size": 4.2,
    "Horsepower": 358
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2012,
    "Price": 56753.65,
    "Mileage": 189627,
    "Engine_Size": 3.9,
    "Horsepower": 390
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2018,
    "Price": 48796.9,
    "Mileage": 123642,
    "Engine_Size": 3.4,
    "Horsepower": 175
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2011,
    "Price": 50212.35,
    "Mileage": 70453,
    "Engine_Size": 3.0,
    "Horsepower": 359
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2011,
    "Price": 38057.55,
    "Mileage": 27689,
    "Engine_Size": 1.5,
    "Horsepower": 157
  },
  {
    "Brand": "BMW",
    "Model_Year": 2005,
    "Price": 34075.8,
    "Mileage": 144324,
    "Engine_Size": 2.0,
    "Horsepower": 261
  },
  {
    "Brand": "Honda",
    "Model_Year": 2021,
    "Price": 56698.8,
    "Mileage": 35844,
    "Engine_Size": 2.7,
    "Horsepower": 222
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2013,
    "Price": 51617.65,
    "Mileage": 100687,
    "Engine_Size": 3.4,
    "Horsepower": 380
  },
  {
    "Brand": "BMW",
    "Model_Year": 2017,
    "Price": 47104.75,
    "Mileage": 28365,
    "Engine_Size": 3.1,
    "Horsepower": 206
  },
  {
    "Brand": "BMW",
    "Model_Year": 2023,
    "Price": 51631.1,
    "Mileage": 142098,
    "Engine_Size": 2.2,
    "Horsepower": 342
  },
  {
    "Brand": "Honda",
    "Model_Year": 2023,
    "Price": 38757.85,
    "Mileage": 103303,
    "Engine_Size": 1.0,
    "Horsepower": 218
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2021,
    "Price": 57129.85,
    "Mileage": 33523,
    "Engine_Size": 3.0,
    "Horsepower": 257
  },
  {
    "Brand": "Ford",
    "Model_Year": 2014,
    "Price": 39507.3,
    "Mileage": 146554,
    "Engine_Size": 2.1,
    "Horsepower": 210
  },
  {
    "Brand": "Ford",
    "Model_Year": 2014,
    "Price": 48980.75,
    "Mileage": 117105,
    "Engine_Size": 3.9,
    "Horsepower": 200
  },
  {
    "Brand": "BMW",
    "Model_Year": 2008,
    "Price": 28244.6,
    "Mileage": 53888,
    "Engine_Size": 1.1,
    "Horsepower": 73
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2012,
    "Price": 51172.8,
    "Mileage": 118884,
    "Engine_Size": 3.3,
    "Horsepower": 332
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2022,
    "Price": 53406.6,
    "Mileage": 111968,
    "Engine_Size": 4.8,
    "Horsepower": 95
  },
  {
    "Brand": "Honda",
    "Model_Year": 2018,
    "Price": 37060.5,
    "Mileage": 55110,
    "Engine_Size": 1.7,
    "Horsepower": 93
  },
  {
    "Brand": "Ford",
    "Model_Year": 2022,
    "Price": 54966.75,
    "Mileage": 136565,
    "Engine_Size": 2.9,
    "Horsepower": 335
  },
  {
    "Brand": "BMW",
    "Model_Year": 2018,
    "Price": 36846.7,
    "Mileage": 192266,
    "Engine_Size": 1.4,
    "Horsepower": 298
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2019,
    "Price": 59543.95,
    "Mileage": 87001,
    "Engine_Size": 3.5,
    "Horsepower": 338
  },
  {
    "Brand": "Ford",
    "Model_Year": 2008,
    "Price": 39301.65,
    "Mileage": 44767,
    "Engine_Size": 3.2,
    "Horsepower": 194
  },
  {
    "Brand": "BMW",
    "Model_Year": 2017,
    "Price": 48014.5,
    "Mileage": 34550,
    "Engine_Size": 2.6,
    "Horsepower": 241
  },
  {
    "Brand": "BMW",
    "Model_Year": 2012,
    "Price": 47459.75,
    "Mileage": 149905,
    "Engine_Size": 3.1,
    "Horsepower": 303
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2022,
    "Price": 65606.9,
    "Mileage": 139042,
    "Engine_Size": 4.6,
    "Horsepower": 364
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2016,
    "Price": 49946.25,
    "Mileage": 103315,
    "Engine_Size": 1.8,
    "Horsepower": 344
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2018,
    "Price": 32678.300000000003,
    "Mileage": 100494,
    "Engine_Size": 1.1,
    "Horsepower": 145
  },
  {
    "Brand": "Honda",
    "Model_Year": 2006,
    "Price": 53932.8,
    "Mileage": 132424,
    "Engine_Size": 4.4,
    "Horsepower": 377
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2022,
    "Price": 58373.25,
    "Mileage": 118855,
    "Engine_Size": 3.3,
    "Horsepower": 283
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2006,
    "Price": 44877.95,
    "Mileage": 87681,
    "Engine_Size": 4.6,
    "Horsepower": 227
  },
  {
    "Brand": "Ford",
    "Model_Year": 2015,
    "Price": 56002.55,
    "Mileage": 106489,
    "Engine_Size": 3.4,
    "Horsepower": 371
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2013,
    "Price": 49620.55,
    "Mileage": 185249,
    "Engine_Size": 4.2,
    "Horsepower": 273
  },
  {
    "Brand": "BMW",
    "Model_Year": 2016,
    "Price": 42736.7,
    "Mileage": 135546,
    "Engine_Size": 2.7,
    "Horsepower": 218
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2021,
    "Price": 46614.35,
    "Mileage": 197573,
    "Engine_Size": 4.0,
    "Horsepower": 144
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2019,
    "Price": 65043.0,
    "Mileage": 33900,
    "Engine_Size": 4.7,
    "Horsepower": 298
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2021,
    "Price": 66363.7,
    "Mileage": 19126,
    "Engine_Size": 3.3,
    "Horsepower": 373
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2022,
    "Price": 40952.1,
    "Mileage": 116198,
    "Engine_Size": 1.7,
    "Horsepower": 131
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2010,
    "Price": 32732.85,
    "Mileage": 84303,
    "Engine_Size": 2.1,
    "Horsepower": 127
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2021,
    "Price": 46671.7,
    "Mileage": 184066,
    "Engine_Size": 1.8,
    "Horsepower": 343
  },
  {
    "Brand": "Honda",
    "Model_Year": 2022,
    "Price": 44325.95,
    "Mileage": 72061,
    "Engine_Size": 2.0,
    "Horsepower": 177
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2012,
    "Price": 49011.1,
    "Mileage": 21978,
    "Engine_Size": 2.2,
    "Horsepower": 256
  },
  {
    "Brand": "Ford",
    "Model_Year": 2013,
    "Price": 54628.8,
    "Mileage": 61344,
    "Engine_Size": 3.2,
    "Horsepower": 298
  },
  {
    "Brand": "BMW",
    "Model_Year": 2010,
    "Price": 41489.6,
    "Mileage": 51648,
    "Engine_Size": 3.4,
    "Horsepower": 117
  },
  {
    "Brand": "Honda",
    "Model_Year": 2009,
    "Price": 55575.25,
    "Mileage": 6055,
    "Engine_Size": 2.7,
    "Horsepower": 388
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2016,
    "Price": 57703.9,
    "Mileage": 80582,
    "Engine_Size": 3.5,
    "Horsepower": 337
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2015,
    "Price": 42909.3,
    "Mileage": 86214,
    "Engine_Size": 1.3,
    "Horsepower": 284
  },
  {
    "Brand": "Honda",
    "Model_Year": 2005,
    "Price": 32906.6,
    "Mileage": 180948,
    "Engine_Size": 1.4,
    "Horsepower": 359
  },
  {
    "Brand": "Honda",
    "Model_Year": 2015,
    "Price": 40478.3,
    "Mileage": 112954,
    "Engine_Size": 1.7,
    "Horsepower": 323
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2023,
    "Price": 56754.75,
    "Mileage": 43725,
    "Engine_Size": 3.1,
    "Horsepower": 156
  },
  {
    "Brand": "Honda",
    "Model_Year": 2013,
    "Price": 42764.65,
    "Mileage": 141327,
    "Engine_Size": 1.9,
    "Horsepower": 250
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2006,
    "Price": 29216.0,
    "Mileage": 58380,
    "Engine_Size": 2.1,
    "Horsepower": 94
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2016,
    "Price": 50289.35,
    "Mileage": 58333,
    "Engine_Size": 2.6,
    "Horsepower": 291
  },
  {
    "Brand": "Honda",
    "Model_Year": 2008,
    "Price": 44632.05,
    "Mileage": 47459,
    "Engine_Size": 4.2,
    "Horsepower": 118
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2008,
    "Price": 27541.1,
    "Mileage": 121518,
    "Engine_Size": 1.1,
    "Horsepower": 244
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2022,
    "Price": 63761.850000000006,
    "Mileage": 41163,
    "Engine_Size": 3.6,
    "Horsepower": 380
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2019,
    "Price": 53853.85,
    "Mileage": 170043,
    "Engine_Size": 3.7,
    "Horsepower": 343
  },
  {
    "Brand": "BMW",
    "Model_Year": 2023,
    "Price": 54438.5,
    "Mileage": 89730,
    "Engine_Size": 4.2,
    "Horsepower": 104
  },
  {
    "Brand": "Honda",
    "Model_Year": 2017,
    "Price": 61367.2,
    "Mileage": 24476,
    "Engine_Size": 4.7,
    "Horsepower": 286
  },
  {
    "Brand": "BMW",
    "Model_Year": 2023,
    "Price": 50001.0,
    "Mileage": 73580,
    "Engine_Size": 1.1,
    "Horsepower": 278
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2021,
    "Price": 44964.2,
    "Mileage": 110576,
    "Engine_Size": 1.6,
    "Horsepower": 229
  },
  {
    "Brand": "Honda",
    "Model_Year": 2010,
    "Price": 43697.35,
    "Mileage": 91593,
    "Engine_Size": 4.5,
    "Horsepower": 76
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2020,
    "Price": 56675.45,
    "Mileage": 114071,
    "Engine_Size": 2.8,
    "Horsepower": 338
  },
  {
    "Brand": "Ford",
    "Model_Year": 2016,
    "Price": 47300.4,
    "Mileage": 119832,
    "Engine_Size": 3.3,
    "Horsepower": 195
  },
  {
    "Brand": "BMW",
    "Model_Year": 2023,
    "Price": 64511.05,
    "Mileage": 143579,
    "Engine_Size": 3.7,
    "Horsepower": 394
  },
  {
    "Brand": "Honda",
    "Model_Year": 2009,
    "Price": 38127.5,
    "Mileage": 148190,
    "Engine_Size": 3.7,
    "Horsepower": 159
  },
  {
    "Brand": "BMW",
    "Model_Year": 2021,
    "Price": 51687.95,
    "Mileage": 186601,
    "Engine_Size": 4.7,
    "Horsepower": 111
  },
  {
    "Brand": "Honda",
    "Model_Year": 2005,
    "Price": 53274.9,
    "Mileage": 73682,
    "Engine_Size": 5.0,
    "Horsepower": 228
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2014,
    "Price": 47710.6,
    "Mileage": 190248,
    "Engine_Size": 3.9,
    "Horsepower": 271
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2019,
    "Price": 55691.35,
    "Mileage": 96713,
    "Engine_Size": 2.1,
    "Horsepower": 351
  },
  {
    "Brand": "BMW",
    "Model_Year": 2015,
    "Price": 55962.0,
    "Mileage": 109060,
    "Engine_Size": 4.5,
    "Horsepower": 357
  },
  {
    "Brand": "Ford",
    "Model_Year": 2017,
    "Price": 35481.7,
    "Mileage": 140486,
    "Engine_Size": 1.2,
    "Horsepower": 160
  },
  {
    "Brand": "Ford",
    "Model_Year": 2009,
    "Price": 31568.5,
    "Mileage": 88030,
    "Engine_Size": 1.9,
    "Horsepower": 194
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2005,
    "Price": 45374.0,
    "Mileage": 125360,
    "Engine_Size": 4.6,
    "Horsepower": 195
  },
  {
    "Brand": "Honda",
    "Model_Year": 2016,
    "Price": 33608.35,
    "Mileage": 90973,
    "Engine_Size": 2.0,
    "Horsepower": 121
  },
  {
    "Brand": "BMW",
    "Model_Year": 2015,
    "Price": 35597.55,
    "Mileage": 198209,
    "Engine_Size": 1.9,
    "Horsepower": 172
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2021,
    "Price": 45341.55,
    "Mileage": 140009,
    "Engine_Size": 1.6,
    "Horsepower": 256
  },
  {
    "Brand": "BMW",
    "Model_Year": 2008,
    "Price": 49795.45,
    "Mileage": 41731,
    "Engine_Size": 4.4,
    "Horsepower": 274
  },
  {
    "Brand": "Honda",
    "Model_Year": 2019,
    "Price": 38829.15,
    "Mileage": 174737,
    "Engine_Size": 3.0,
    "Horsepower": 83
  },
  {
    "Brand": "Ford",
    "Model_Year": 2013,
    "Price": 40636.4,
    "Mileage": 153572,
    "Engine_Size": 3.7,
    "Horsepower": 173
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2023,
    "Price": 46207.0,
    "Mileage": 119360,
    "Engine_Size": 2.0,
    "Horsepower": 186
  },
  {
    "Brand": "Ford",
    "Model_Year": 2023,
    "Price": 67484.5,
    "Mileage": 6750,
    "Engine_Size": 4.0,
    "Horsepower": 373
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2016,
    "Price": 52256.1,
    "Mileage": 70018,
    "Engine_Size": 4.0,
    "Horsepower": 162
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2009,
    "Price": 34530.05,
    "Mileage": 140099,
    "Engine_Size": 2.3,
    "Horsepower": 213
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2014,
    "Price": 41141.15,
    "Mileage": 141817,
    "Engine_Size": 2.6,
    "Horsepower": 179
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2021,
    "Price": 40048.85,
    "Mileage": 197803,
    "Engine_Size": 1.8,
    "Horsepower": 232
  },
  {
    "Brand": "Honda",
    "Model_Year": 2009,
    "Price": 44249.8,
    "Mileage": 91984,
    "Engine_Size": 4.9,
    "Horsepower": 122
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2020,
    "Price": 46233.85,
    "Mileage": 112983,
    "Engine_Size": 3.6,
    "Horsepower": 72
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2011,
    "Price": 53152.45,
    "Mileage": 33451,
    "Engine_Size": 4.7,
    "Horsepower": 137
  },
  {
    "Brand": "Honda",
    "Model_Year": 2013,
    "Price": 43875.85,
    "Mileage": 98743,
    "Engine_Size": 2.2,
    "Horsepower": 315
  },
  {
    "Brand": "Ford",
    "Model_Year": 2007,
    "Price": 43673.3,
    "Mileage": 76474,
    "Engine_Size": 4.1,
    "Horsepower": 207
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2019,
    "Price": 59505.6,
    "Mileage": 197608,
    "Engine_Size": 4.1,
    "Horsepower": 377
  },
  {
    "Brand": "Honda",
    "Model_Year": 2020,
    "Price": 64381.5,
    "Mileage": 17150,
    "Engine_Size": 3.8,
    "Horsepower": 356
  },
  {
    "Brand": "BMW",
    "Model_Year": 2022,
    "Price": 58434.7,
    "Mileage": 18406,
    "Engine_Size": 4.9,
    "Horsepower": 135
  },
  {
    "Brand": "Honda",
    "Model_Year": 2018,
    "Price": 54554.35,
    "Mileage": 155853,
    "Engine_Size": 2.6,
    "Horsepower": 394
  },
  {
    "Brand": "Honda",
    "Model_Year": 2007,
    "Price": 29125.55,
    "Mileage": 193489,
    "Engine_Size": 1.5,
    "Horsepower": 224
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2016,
    "Price": 46957.65,
    "Mileage": 121047,
    "Engine_Size": 3.7,
    "Horsepower": 156
  },
  {
    "Brand": "BMW",
    "Model_Year": 2013,
    "Price": 40283.45,
    "Mileage": 128971,
    "Engine_Size": 3.9,
    "Horsepower": 102
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2011,
    "Price": 42255.15,
    "Mileage": 108157,
    "Engine_Size": 3.3,
    "Horsepower": 137
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2013,
    "Price": 41604.75,
    "Mileage": 23325,
    "Engine_Size": 1.8,
    "Horsepower": 256
  },
  {
    "Brand": "Honda",
    "Model_Year": 2017,
    "Price": 52288.25,
    "Mileage": 99415,
    "Engine_Size": 3.0,
    "Horsepower": 261
  },
  {
    "Brand": "BMW",
    "Model_Year": 2022,
    "Price": 47366.6,
    "Mileage": 145508,
    "Engine_Size": 2.2,
    "Horsepower": 282
  },
  {
    "Brand": "BMW",
    "Model_Year": 2009,
    "Price": 41872.55,
    "Mileage": 22669,
    "Engine_Size": 2.7,
    "Horsepower": 157
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2017,
    "Price": 47151.75,
    "Mileage": 132385,
    "Engine_Size": 3.6,
    "Horsepower": 177
  },
  {
    "Brand": "Ford",
    "Model_Year": 2008,
    "Price": 50334.5,
    "Mileage": 77010,
    "Engine_Size": 4.0,
    "Horsepower": 309
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2006,
    "Price": 38276.25,
    "Mileage": 137915,
    "Engine_Size": 1.9,
    "Horsepower": 285
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2020,
    "Price": 51883.4,
    "Mileage": 55812,
    "Engine_Size": 2.6,
    "Horsepower": 246
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2013,
    "Price": 39700.05,
    "Mileage": 21059,
    "Engine_Size": 2.1,
    "Horsepower": 122
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2013,
    "Price": 45158.55,
    "Mileage": 91269,
    "Engine_Size": 1.8,
    "Horsepower": 399
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2010,
    "Price": 39002.0,
    "Mileage": 176840,
    "Engine_Size": 4.1,
    "Horsepower": 118
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2015,
    "Price": 58006.25,
    "Mileage": 30395,
    "Engine_Size": 4.6,
    "Horsepower": 183
  },
  {
    "Brand": "Ford",
    "Model_Year": 2005,
    "Price": 35728.9,
    "Mileage": 25202,
    "Engine_Size": 2.5,
    "Horsepower": 164
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2008,
    "Price": 35697.75,
    "Mileage": 149345,
    "Engine_Size": 4.0,
    "Horsepower": 94
  },
  {
    "Brand": "Ford",
    "Model_Year": 2017,
    "Price": 48464.95,
    "Mileage": 184961,
    "Engine_Size": 4.6,
    "Horsepower": 201
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2017,
    "Price": 58533.25,
    "Mileage": 108235,
    "Engine_Size": 4.4,
    "Horsepower": 248
  },
  {
    "Brand": "Honda",
    "Model_Year": 2017,
    "Price": 40603.5,
    "Mileage": 50510,
    "Engine_Size": 1.7,
    "Horsepower": 214
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2006,
    "Price": 55491.75,
    "Mileage": 92945,
    "Engine_Size": 4.8,
    "Horsepower": 267
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2013,
    "Price": 52675.55,
    "Mileage": 75649,
    "Engine_Size": 2.5,
    "Horsepower": 394
  },
  {
    "Brand": "Ford",
    "Model_Year": 2012,
    "Price": 36626.85,
    "Mileage": 111723,
    "Engine_Size": 2.4,
    "Horsepower": 153
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2011,
    "Price": 37793.95,
    "Mileage": 7881,
    "Engine_Size": 1.2,
    "Horsepower": 226
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2008,
    "Price": 38544.35,
    "Mileage": 50913,
    "Engine_Size": 2.9,
    "Horsepower": 154
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2022,
    "Price": 43997.0,
    "Mileage": 116860,
    "Engine_Size": 1.4,
    "Horsepower": 322
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2007,
    "Price": 32587.75,
    "Mileage": 89785,
    "Engine_Size": 2.0,
    "Horsepower": 141
  },
  {
    "Brand": "BMW",
    "Model_Year": 2010,
    "Price": 47266.15,
    "Mileage": 67457,
    "Engine_Size": 2.3,
    "Horsepower": 292
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2016,
    "Price": 53952.25,
    "Mileage": 171415,
    "Engine_Size": 4.2,
    "Horsepower": 345
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2016,
    "Price": 60570.95,
    "Mileage": 198461,
    "Engine_Size": 4.5,
    "Horsepower": 352
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2012,
    "Price": 45916.6,
    "Mileage": 144728,
    "Engine_Size": 2.2,
    "Horsepower": 333
  },
  {
    "Brand": "Honda",
    "Model_Year": 2005,
    "Price": 57576.95,
    "Mileage": 10741,
    "Engine_Size": 4.4,
    "Horsepower": 315
  },
  {
    "Brand": "Ford",
    "Model_Year": 2008,
    "Price": 37712.35,
    "Mileage": 152733,
    "Engine_Size": 4.4,
    "Horsepower": 130
  },
  {
    "Brand": "Honda",
    "Model_Year": 2015,
    "Price": 55620.45,
    "Mileage": 102091,
    "Engine_Size": 4.1,
    "Horsepower": 328
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2007,
    "Price": 30161.5,
    "Mileage": 33690,
    "Engine_Size": 1.6,
    "Horsepower": 76
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2017,
    "Price": 60252.35,
    "Mileage": 37833,
    "Engine_Size": 3.8,
    "Horsepower": 257
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2021,
    "Price": 53877.7,
    "Mileage": 107566,
    "Engine_Size": 4.8,
    "Horsepower": 73
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2014,
    "Price": 53757.0,
    "Mileage": 76240,
    "Engine_Size": 3.7,
    "Horsepower": 300
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2016,
    "Price": 45085.1,
    "Mileage": 111898,
    "Engine_Size": 2.3,
    "Horsepower": 202
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2019,
    "Price": 49328.45,
    "Mileage": 82711,
    "Engine_Size": 3.0,
    "Horsepower": 194
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2014,
    "Price": 39398.35,
    "Mileage": 193213,
    "Engine_Size": 3.6,
    "Horsepower": 84
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2018,
    "Price": 44900.85,
    "Mileage": 44023,
    "Engine_Size": 3.0,
    "Horsepower": 82
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2017,
    "Price": 38581.55,
    "Mileage": 45209,
    "Engine_Size": 1.5,
    "Horsepower": 187
  },
  {
    "Brand": "Ford",
    "Model_Year": 2009,
    "Price": 40561.5,
    "Mileage": 98590,
    "Engine_Size": 2.2,
    "Horsepower": 309
  },
  {
    "Brand": "Ford",
    "Model_Year": 2010,
    "Price": 52467.4,
    "Mileage": 91612,
    "Engine_Size": 4.2,
    "Horsepower": 332
  },
  {
    "Brand": "BMW",
    "Model_Year": 2006,
    "Price": 39064.9,
    "Mileage": 85522,
    "Engine_Size": 4.4,
    "Horsepower": 75
  },
  {
    "Brand": "Honda",
    "Model_Year": 2021,
    "Price": 54331.3,
    "Mileage": 116654,
    "Engine_Size": 1.5,
    "Horsepower": 389
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2008,
    "Price": 50827.4,
    "Mileage": 150512,
    "Engine_Size": 4.8,
    "Horsepower": 300
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2018,
    "Price": 39775.65,
    "Mileage": 124107,
    "Engine_Size": 2.3,
    "Horsepower": 99
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2014,
    "Price": 37906.4,
    "Mileage": 144032,
    "Engine_Size": 3.6,
    "Horsepower": 91
  },
  {
    "Brand": "BMW",
    "Model_Year": 2007,
    "Price": 46466.9,
    "Mileage": 27462,
    "Engine_Size": 4.0,
    "Horsepower": 225
  },
  {
    "Brand": "Ford",
    "Model_Year": 2007,
    "Price": 44846.95,
    "Mileage": 22821,
    "Engine_Size": 4.2,
    "Horsepower": 187
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2019,
    "Price": 51634.8,
    "Mileage": 193844,
    "Engine_Size": 4.8,
    "Horsepower": 262
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2010,
    "Price": 34920.5,
    "Mileage": 163330,
    "Engine_Size": 2.3,
    "Horsepower": 264
  },
  {
    "Brand": "BMW",
    "Model_Year": 2021,
    "Price": 61166.55,
    "Mileage": 97889,
    "Engine_Size": 4.4,
    "Horsepower": 237
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2016,
    "Price": 42834.4,
    "Mileage": 93952,
    "Engine_Size": 1.5,
    "Horsepower": 308
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2015,
    "Price": 47969.2,
    "Mileage": 198596,
    "Engine_Size": 3.8,
    "Horsepower": 313
  },
  {
    "Brand": "Honda",
    "Model_Year": 2008,
    "Price": 39417.65,
    "Mileage": 158187,
    "Engine_Size": 4.0,
    "Horsepower": 138
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2010,
    "Price": 39074.7,
    "Mileage": 123066,
    "Engine_Size": 3.7,
    "Horsepower": 164
  },
  {
    "Brand": "Ford",
    "Model_Year": 2005,
    "Price": 26367.75,
    "Mileage": 182505,
    "Engine_Size": 2.0,
    "Horsepower": 146
  },
  {
    "Brand": "Ford",
    "Model_Year": 2020,
    "Price": 57119.8,
    "Mileage": 84364,
    "Engine_Size": 4.5,
    "Horsepower": 240
  },
  {
    "Brand": "BMW",
    "Model_Year": 2019,
    "Price": 35806.15,
    "Mileage": 75077,
    "Engine_Size": 1.7,
    "Horsepower": 70
  },
  {
    "Brand": "Ford",
    "Model_Year": 2021,
    "Price": 41225.8,
    "Mileage": 45644,
    "Engine_Size": 1.2,
    "Horsepower": 131
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2012,
    "Price": 51626.85,
    "Mileage": 67643,
    "Engine_Size": 3.9,
    "Horsepower": 276
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2016,
    "Price": 48857.45,
    "Mileage": 18311,
    "Engine_Size": 2.9,
    "Horsepower": 223
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2014,
    "Price": 55852.7,
    "Mileage": 134466,
    "Engine_Size": 4.4,
    "Horsepower": 343
  },
  {
    "Brand": "BMW",
    "Model_Year": 2019,
    "Price": 46453.45,
    "Mileage": 35531,
    "Engine_Size": 2.5,
    "Horsepower": 117
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2013,
    "Price": 39111.6,
    "Mileage": 19588,
    "Engine_Size": 1.7,
    "Horsepower": 206
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2006,
    "Price": 43667.2,
    "Mileage": 54416,
    "Engine_Size": 4.3,
    "Horsepower": 70
  },
  {
    "Brand": "Honda",
    "Model_Year": 2009,
    "Price": 43282.4,
    "Mileage": 148452,
    "Engine_Size": 3.2,
    "Horsepower": 304
  },
  {
    "Brand": "BMW",
    "Model_Year": 2010,
    "Price": 41597.15,
    "Mileage": 178717,
    "Engine_Size": 1.8,
    "Horsepower": 325
  },
  {
    "Brand": "Honda",
    "Model_Year": 2011,
    "Price": 45953.5,
    "Mileage": 153890,
    "Engine_Size": 3.9,
    "Horsepower": 176
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2005,
    "Price": 38945.55,
    "Mileage": 166929,
    "Engine_Size": 3.0,
    "Horsepower": 242
  },
  {
    "Brand": "Honda",
    "Model_Year": 2011,
    "Price": 43675.45,
    "Mileage": 26711,
    "Engine_Size": 3.4,
    "Horsepower": 199
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2016,
    "Price": 52231.55,
    "Mileage": 141169,
    "Engine_Size": 2.8,
    "Horsepower": 363
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2020,
    "Price": 48675.6,
    "Mileage": 121348,
    "Engine_Size": 4.3,
    "Horsepower": 109
  },
  {
    "Brand": "Honda",
    "Model_Year": 2020,
    "Price": 45822.75,
    "Mileage": 164465,
    "Engine_Size": 4.3,
    "Horsepower": 85
  },
  {
    "Brand": "BMW",
    "Model_Year": 2015,
    "Price": 53738.2,
    "Mileage": 27076,
    "Engine_Size": 3.8,
    "Horsepower": 196
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2008,
    "Price": 33706.3,
    "Mileage": 89274,
    "Engine_Size": 1.4,
    "Horsepower": 272
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2017,
    "Price": 53943.55,
    "Mileage": 62609,
    "Engine_Size": 4.4,
    "Horsepower": 203
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2011,
    "Price": 45415.55,
    "Mileage": 165389,
    "Engine_Size": 3.7,
    "Horsepower": 328
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2008,
    "Price": 40158.0,
    "Mileage": 63480,
    "Engine_Size": 3.8,
    "Horsepower": 83
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2019,
    "Price": 48699.8,
    "Mileage": 12044,
    "Engine_Size": 2.5,
    "Horsepower": 135
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2023,
    "Price": 63814.7,
    "Mileage": 60486,
    "Engine_Size": 4.5,
    "Horsepower": 264
  },
  {
    "Brand": "BMW",
    "Model_Year": 2013,
    "Price": 48901.9,
    "Mileage": 60162,
    "Engine_Size": 3.9,
    "Horsepower": 183
  },
  {
    "Brand": "Ford",
    "Model_Year": 2015,
    "Price": 42292.9,
    "Mileage": 34882,
    "Engine_Size": 1.5,
    "Horsepower": 228
  },
  {
    "Brand": "Honda",
    "Model_Year": 2012,
    "Price": 46044.1,
    "Mileage": 59078,
    "Engine_Size": 2.6,
    "Horsepower": 230
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2005,
    "Price": 51298.3,
    "Mileage": 63734,
    "Engine_Size": 4.5,
    "Horsepower": 323
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2012,
    "Price": 27267.5,
    "Mileage": 113730,
    "Engine_Size": 1.2,
    "Horsepower": 84
  },
  {
    "Brand": "BMW",
    "Model_Year": 2017,
    "Price": 45683.1,
    "Mileage": 179898,
    "Engine_Size": 4.8,
    "Horsepower": 106
  },
  {
    "Brand": "Honda",
    "Model_Year": 2008,
    "Price": 49067.75,
    "Mileage": 92985,
    "Engine_Size": 3.7,
    "Horsepower": 224
  },
  {
    "Brand": "BMW",
    "Model_Year": 2012,
    "Price": 39844.6,
    "Mileage": 49028,
    "Engine_Size": 3.5,
    "Horsepower": 96
  },
  {
    "Brand": "Honda",
    "Model_Year": 2007,
    "Price": 23455.85,
    "Mileage": 187403,
    "Engine_Size": 2.1,
    "Horsepower": 81
  },
  {
    "Brand": "Honda",
    "Model_Year": 2013,
    "Price": 36334.1,
    "Mileage": 103938,
    "Engine_Size": 2.0,
    "Horsepower": 136
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2006,
    "Price": 40897.05,
    "Mileage": 123319,
    "Engine_Size": 4.8,
    "Horsepower": 99
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2006,
    "Price": 36818.85,
    "Mileage": 37543,
    "Engine_Size": 2.2,
    "Horsepower": 165
  },
  {
    "Brand": "BMW",
    "Model_Year": 2017,
    "Price": 54673.05,
    "Mileage": 129279,
    "Engine_Size": 4.1,
    "Horsepower": 284
  },
  {
    "Brand": "BMW",
    "Model_Year": 2019,
    "Price": 52352.9,
    "Mileage": 34362,
    "Engine_Size": 2.6,
    "Horsepower": 263
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2016,
    "Price": 37355.65,
    "Mileage": 163387,
    "Engine_Size": 1.6,
    "Horsepower": 204
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2008,
    "Price": 35831.1,
    "Mileage": 163818,
    "Engine_Size": 1.0,
    "Horsepower": 359
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2012,
    "Price": 35365.55,
    "Mileage": 146129,
    "Engine_Size": 3.2,
    "Horsepower": 101
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2013,
    "Price": 52588.25,
    "Mileage": 47915,
    "Engine_Size": 4.9,
    "Horsepower": 108
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2009,
    "Price": 39264.35,
    "Mileage": 157133,
    "Engine_Size": 2.5,
    "Horsepower": 275
  },
  {
    "Brand": "Ford",
    "Model_Year": 2022,
    "Price": 42297.5,
    "Mileage": 56370,
    "Engine_Size": 2.4,
    "Horsepower": 112
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2015,
    "Price": 47476.55,
    "Mileage": 170229,
    "Engine_Size": 2.4,
    "Horsepower": 328
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2019,
    "Price": 50698.25,
    "Mileage": 116375,
    "Engine_Size": 3.1,
    "Horsepower": 318
  },
  {
    "Brand": "Honda",
    "Model_Year": 2013,
    "Price": 37313.3,
    "Mileage": 147394,
    "Engine_Size": 2.8,
    "Horsepower": 143
  },
  {
    "Brand": "BMW",
    "Model_Year": 2021,
    "Price": 67795.4,
    "Mileage": 74812,
    "Engine_Size": 4.5,
    "Horsepower": 388
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2016,
    "Price": 58237.15,
    "Mileage": 39017,
    "Engine_Size": 3.0,
    "Horsepower": 365
  },
  {
    "Brand": "BMW",
    "Model_Year": 2011,
    "Price": 50867.4,
    "Mileage": 61792,
    "Engine_Size": 3.0,
    "Horsepower": 343
  },
  {
    "Brand": "BMW",
    "Model_Year": 2014,
    "Price": 44514.3,
    "Mileage": 163814,
    "Engine_Size": 1.6,
    "Horsepower": 392
  },
  {
    "Brand": "Ford",
    "Model_Year": 2014,
    "Price": 57929.1,
    "Mileage": 134198,
    "Engine_Size": 4.9,
    "Horsepower": 259
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2017,
    "Price": 47303.55,
    "Mileage": 22629,
    "Engine_Size": 2.0,
    "Horsepower": 207
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2023,
    "Price": 50566.3,
    "Mileage": 133614,
    "Engine_Size": 1.3,
    "Horsepower": 371
  },
  {
    "Brand": "BMW",
    "Model_Year": 2015,
    "Price": 56404.15,
    "Mileage": 144317,
    "Engine_Size": 3.7,
    "Horsepower": 380
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2017,
    "Price": 57784.5,
    "Mileage": 101950,
    "Engine_Size": 3.4,
    "Horsepower": 351
  },
  {
    "Brand": "Honda",
    "Model_Year": 2012,
    "Price": 39621.9,
    "Mileage": 179942,
    "Engine_Size": 2.7,
    "Horsepower": 235
  },
  {
    "Brand": "Ford",
    "Model_Year": 2012,
    "Price": 48279.55,
    "Mileage": 69829,
    "Engine_Size": 2.7,
    "Horsepower": 347
  },
  {
    "Brand": "Honda",
    "Model_Year": 2008,
    "Price": 43586.6,
    "Mileage": 15588,
    "Engine_Size": 4.1,
    "Horsepower": 95
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2019,
    "Price": 37828.3,
    "Mileage": 136514,
    "Engine_Size": 1.8,
    "Horsepower": 142
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2015,
    "Price": 48714.0,
    "Mileage": 110280,
    "Engine_Size": 4.3,
    "Horsepower": 184
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2015,
    "Price": 50030.95,
    "Mileage": 45721,
    "Engine_Size": 3.6,
    "Horsepower": 120
  },
  {
    "Brand": "BMW",
    "Model_Year": 2005,
    "Price": 36990.15,
    "Mileage": 173217,
    "Engine_Size": 2.7,
    "Horsepower": 240
  },
  {
    "Brand": "BMW",
    "Model_Year": 2021,
    "Price": 60613.05,
    "Mileage": 15599,
    "Engine_Size": 2.8,
    "Horsepower": 337
  },
  {
    "Brand": "Honda",
    "Model_Year": 2019,
    "Price": 35679.3,
    "Mileage": 77594,
    "Engine_Size": 2.0,
    "Horsepower": 72
  },
  {
    "Brand": "Ford",
    "Model_Year": 2010,
    "Price": 50411.45,
    "Mileage": 139011,
    "Engine_Size": 4.0,
    "Horsepower": 279
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2019,
    "Price": 59199.55,
    "Mileage": 27149,
    "Engine_Size": 3.1,
    "Horsepower": 370
  },
  {
    "Brand": "BMW",
    "Model_Year": 2013,
    "Price": 37659.2,
    "Mileage": 132616,
    "Engine_Size": 2.3,
    "Horsepower": 184
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2018,
    "Price": 53751.0,
    "Mileage": 146280,
    "Engine_Size": 3.4,
    "Horsepower": 236
  },
  {
    "Brand": "Honda",
    "Model_Year": 2022,
    "Price": 69079.3,
    "Mileage": 114034,
    "Engine_Size": 5.0,
    "Horsepower": 334
  },
  {
    "Brand": "Honda",
    "Model_Year": 2021,
    "Price": 47769.8,
    "Mileage": 185564,
    "Engine_Size": 2.7,
    "Horsepower": 296
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2022,
    "Price": 64881.45,
    "Mileage": 25951,
    "Engine_Size": 4.7,
    "Horsepower": 220
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2009,
    "Price": 38566.4,
    "Mileage": 184992,
    "Engine_Size": 2.4,
    "Horsepower": 337
  },
  {
    "Brand": "Ford",
    "Model_Year": 2013,
    "Price": 34088.7,
    "Mileage": 51766,
    "Engine_Size": 1.2,
    "Horsepower": 185
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2015,
    "Price": 37219.3,
    "Mileage": 62014,
    "Engine_Size": 1.8,
    "Horsepower": 157
  },
  {
    "Brand": "Ford",
    "Model_Year": 2005,
    "Price": 42166.85,
    "Mileage": 164423,
    "Engine_Size": 2.7,
    "Horsepower": 387
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2022,
    "Price": 42536.1,
    "Mileage": 185458,
    "Engine_Size": 1.9,
    "Horsepower": 311
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2010,
    "Price": 40185.9,
    "Mileage": 92122,
    "Engine_Size": 1.0,
    "Horsepower": 398
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2006,
    "Price": 49360.6,
    "Mileage": 14308,
    "Engine_Size": 4.7,
    "Horsepower": 109
  },
  {
    "Brand": "Honda",
    "Model_Year": 2019,
    "Price": 61650.4,
    "Mileage": 64252,
    "Engine_Size": 4.4,
    "Horsepower": 251
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2018,
    "Price": 58111.45,
    "Mileage": 88211,
    "Engine_Size": 4.0,
    "Horsepower": 278
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2009,
    "Price": 37315.2,
    "Mileage": 164136,
    "Engine_Size": 1.7,
    "Horsepower": 342
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2010,
    "Price": 31133.45,
    "Mileage": 189951,
    "Engine_Size": 1.5,
    "Horsepower": 188
  },
  {
    "Brand": "BMW",
    "Model_Year": 2010,
    "Price": 26044.3,
    "Mileage": 131534,
    "Engine_Size": 1.3,
    "Horsepower": 93
  },
  {
    "Brand": "Honda",
    "Model_Year": 2022,
    "Price": 68763.0,
    "Mileage": 13720,
    "Engine_Size": 3.9,
    "Horsepower": 327
  },
  {
    "Brand": "BMW",
    "Model_Year": 2018,
    "Price": 56239.8,
    "Mileage": 131204,
    "Engine_Size": 4.7,
    "Horsepower": 161
  },
  {
    "Brand": "Honda",
    "Model_Year": 2014,
    "Price": 39819.4,
    "Mileage": 179012,
    "Engine_Size": 2.7,
    "Horsepower": 230
  },
  {
    "Brand": "BMW",
    "Model_Year": 2018,
    "Price": 41386.35,
    "Mileage": 84993,
    "Engine_Size": 1.5,
    "Horsepower": 218
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2017,
    "Price": 52283.35,
    "Mileage": 52113,
    "Engine_Size": 3.0,
    "Horsepower": 186
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2007,
    "Price": 35941.7,
    "Mileage": 53926,
    "Engine_Size": 2.4,
    "Horsepower": 122
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2010,
    "Price": 42622.25,
    "Mileage": 174275,
    "Engine_Size": 2.5,
    "Horsepower": 371
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2012,
    "Price": 38131.8,
    "Mileage": 141464,
    "Engine_Size": 3.5,
    "Horsepower": 114
  },
  {
    "Brand": "BMW",
    "Model_Year": 2016,
    "Price": 61124.75,
    "Mileage": 30905,
    "Engine_Size": 3.9,
    "Horsepower": 334
  },
  {
    "Brand": "Ford",
    "Model_Year": 2017,
    "Price": 49907.75,
    "Mileage": 55385,
    "Engine_Size": 1.4,
    "Horsepower": 331
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2015,
    "Price": 50629.35,
    "Mileage": 35653,
    "Engine_Size": 1.1,
    "Horsepower": 376
  },
  {
    "Brand": "BMW",
    "Model_Year": 2016,
    "Price": 62853.75,
    "Mileage": 96865,
    "Engine_Size": 5.0,
    "Horsepower": 303
  },
  {
    "Brand": "BMW",
    "Model_Year": 2005,
    "Price": 28934.35,
    "Mileage": 130813,
    "Engine_Size": 1.9,
    "Horsepower": 104
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2021,
    "Price": 43911.45,
    "Mileage": 150871,
    "Engine_Size": 1.2,
    "Horsepower": 266
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2020,
    "Price": 35739.25,
    "Mileage": 196175,
    "Engine_Size": 1.8,
    "Horsepower": 94
  },
  {
    "Brand": "BMW",
    "Model_Year": 2015,
    "Price": 43174.4,
    "Mileage": 20052,
    "Engine_Size": 1.2,
    "Horsepower": 271
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2017,
    "Price": 47460.2,
    "Mileage": 142116,
    "Engine_Size": 2.6,
    "Horsepower": 342
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2022,
    "Price": 46256.85,
    "Mileage": 155943,
    "Engine_Size": 4.2,
    "Horsepower": 105
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2015,
    "Price": 46363.7,
    "Mileage": 156306,
    "Engine_Size": 2.4,
    "Horsepower": 292
  },
  {
    "Brand": "Honda",
    "Model_Year": 2016,
    "Price": 58052.95,
    "Mileage": 26381,
    "Engine_Size": 2.8,
    "Horsepower": 346
  },
  {
    "Brand": "Ford",
    "Model_Year": 2010,
    "Price": 36356.7,
    "Mileage": 153346,
    "Engine_Size": 3.7,
    "Horsepower": 87
  },
  {
    "Brand": "BMW",
    "Model_Year": 2013,
    "Price": 44635.6,
    "Mileage": 88108,
    "Engine_Size": 3.0,
    "Horsepower": 257
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2020,
    "Price": 65647.4,
    "Mileage": 54892,
    "Engine_Size": 4.4,
    "Horsepower": 326
  },
  {
    "Brand": "Ford",
    "Model_Year": 2008,
    "Price": 47356.35,
    "Mileage": 186593,
    "Engine_Size": 4.5,
    "Horsepower": 211
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2007,
    "Price": 31771.95,
    "Mileage": 96501,
    "Engine_Size": 1.0,
    "Horsepower": 205
  },
  {
    "Brand": "BMW",
    "Model_Year": 2020,
    "Price": 63985.45,
    "Mileage": 88391,
    "Engine_Size": 4.1,
    "Horsepower": 376
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2016,
    "Price": 49007.0,
    "Mileage": 22920,
    "Engine_Size": 2.8,
    "Horsepower": 148
  },
  {
    "Brand": "Honda",
    "Model_Year": 2015,
    "Price": 64054.9,
    "Mileage": 21702,
    "Engine_Size": 5.0,
    "Horsepower": 361
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2009,
    "Price": 38512.3,
    "Mileage": 6894,
    "Engine_Size": 2.9,
    "Horsepower": 131
  },
  {
    "Brand": "BMW",
    "Model_Year": 2022,
    "Price": 64039.75,
    "Mileage": 35985,
    "Engine_Size": 4.9,
    "Horsepower": 198
  },
  {
    "Brand": "Honda",
    "Model_Year": 2023,
    "Price": 62606.05,
    "Mileage": 164359,
    "Engine_Size": 4.0,
    "Horsepower": 367
  },
  {
    "Brand": "Honda",
    "Model_Year": 2010,
    "Price": 40161.9,
    "Mileage": 130702,
    "Engine_Size": 2.0,
    "Horsepower": 326
  },
  {
    "Brand": "BMW",
    "Model_Year": 2022,
    "Price": 52789.65,
    "Mileage": 78527,
    "Engine_Size": 3.2,
    "Horsepower": 281
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2010,
    "Price": 45353.45,
    "Mileage": 151511,
    "Engine_Size": 5.0,
    "Horsepower": 123
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2008,
    "Price": 44194.2,
    "Mileage": 133676,
    "Engine_Size": 4.4,
    "Horsepower": 244
  },
  {
    "Brand": "Honda",
    "Model_Year": 2016,
    "Price": 41046.25,
    "Mileage": 47235,
    "Engine_Size": 1.4,
    "Horsepower": 169
  },
  {
    "Brand": "Ford",
    "Model_Year": 2023,
    "Price": 47426.45,
    "Mileage": 163731,
    "Engine_Size": 3.8,
    "Horsepower": 108
  },
  {
    "Brand": "Honda",
    "Model_Year": 2006,
    "Price": 42303.2,
    "Mileage": 29976,
    "Engine_Size": 2.4,
    "Horsepower": 332
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2021,
    "Price": 39369.85,
    "Mileage": 87643,
    "Engine_Size": 1.0,
    "Horsepower": 219
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2015,
    "Price": 45316.45,
    "Mileage": 112631,
    "Engine_Size": 2.6,
    "Horsepower": 190
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2015,
    "Price": 44931.15,
    "Mileage": 61697,
    "Engine_Size": 1.9,
    "Horsepower": 247
  },
  {
    "Brand": "Ford",
    "Model_Year": 2020,
    "Price": 66155.9,
    "Mileage": 75382,
    "Engine_Size": 4.3,
    "Horsepower": 370
  },
  {
    "Brand": "Honda",
    "Model_Year": 2006,
    "Price": 47160.45,
    "Mileage": 21651,
    "Engine_Size": 2.3,
    "Horsepower": 399
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2006,
    "Price": 36580.2,
    "Mileage": 185116,
    "Engine_Size": 4.3,
    "Horsepower": 189
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2012,
    "Price": 34008.35,
    "Mileage": 19633,
    "Engine_Size": 1.0,
    "Horsepower": 141
  },
  {
    "Brand": "BMW",
    "Model_Year": 2017,
    "Price": 46357.8,
    "Mileage": 84164,
    "Engine_Size": 2.2,
    "Horsepower": 288
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2014,
    "Price": 53959.55,
    "Mileage": 5569,
    "Engine_Size": 2.0,
    "Horsepower": 371
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2012,
    "Price": 29672.4,
    "Mileage": 195972,
    "Engine_Size": 1.9,
    "Horsepower": 192
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2008,
    "Price": 39596.55,
    "Mileage": 72509,
    "Engine_Size": 1.3,
    "Horsepower": 313
  },
  {
    "Brand": "Honda",
    "Model_Year": 2019,
    "Price": 39726.75,
    "Mileage": 128425,
    "Engine_Size": 1.7,
    "Horsepower": 144
  },
  {
    "Brand": "Ford",
    "Model_Year": 2005,
    "Price": 29112.7,
    "Mileage": 106126,
    "Engine_Size": 3.2,
    "Horsepower": 75
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2015,
    "Price": 37586.9,
    "Mileage": 132522,
    "Engine_Size": 2.2,
    "Horsepower": 90
  },
  {
    "Brand": "BMW",
    "Model_Year": 2011,
    "Price": 45904.1,
    "Mileage": 38038,
    "Engine_Size": 2.7,
    "Horsepower": 259
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2021,
    "Price": 48700.0,
    "Mileage": 185160,
    "Engine_Size": 2.5,
    "Horsepower": 294
  },
  {
    "Brand": "BMW",
    "Model_Year": 2022,
    "Price": 56694.1,
    "Mileage": 43138,
    "Engine_Size": 4.5,
    "Horsepower": 172
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2016,
    "Price": 48544.9,
    "Mileage": 199382,
    "Engine_Size": 4.6,
    "Horsepower": 168
  },
  {
    "Brand": "Honda",
    "Model_Year": 2013,
    "Price": 48725.55,
    "Mileage": 164829,
    "Engine_Size": 3.0,
    "Horsepower": 387
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2009,
    "Price": 27919.85,
    "Mileage": 192223,
    "Engine_Size": 2.3,
    "Horsepower": 152
  },
  {
    "Brand": "Honda",
    "Model_Year": 2014,
    "Price": 40255.0,
    "Mileage": 115740,
    "Engine_Size": 1.4,
    "Horsepower": 250
  },
  {
    "Brand": "Ford",
    "Model_Year": 2008,
    "Price": 49585.3,
    "Mileage": 116174,
    "Engine_Size": 4.8,
    "Horsepower": 221
  },
  {
    "Brand": "Ford",
    "Model_Year": 2009,
    "Price": 27778.4,
    "Mileage": 54272,
    "Engine_Size": 1.2,
    "Horsepower": 125
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2014,
    "Price": 38706.0,
    "Mileage": 142980,
    "Engine_Size": 2.2,
    "Horsepower": 259
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2015,
    "Price": 34873.2,
    "Mileage": 146916,
    "Engine_Size": 2.2,
    "Horsepower": 91
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2014,
    "Price": 37840.25,
    "Mileage": 56455,
    "Engine_Size": 2.3,
    "Horsepower": 137
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2012,
    "Price": 42104.65,
    "Mileage": 73447,
    "Engine_Size": 1.7,
    "Horsepower": 254
  },
  {
    "Brand": "Ford",
    "Model_Year": 2006,
    "Price": 40493.6,
    "Mileage": 82108,
    "Engine_Size": 4.1,
    "Horsepower": 79
  },
  {
    "Brand": "Ford",
    "Model_Year": 2012,
    "Price": 28271.1,
    "Mileage": 179138,
    "Engine_Size": 1.5,
    "Horsepower": 135
  },
  {
    "Brand": "Ford",
    "Model_Year": 2020,
    "Price": 50768.2,
    "Mileage": 176076,
    "Engine_Size": 3.5,
    "Horsepower": 333
  },
  {
    "Brand": "Honda",
    "Model_Year": 2009,
    "Price": 38254.35,
    "Mileage": 43333,
    "Engine_Size": 1.5,
    "Horsepower": 294
  },
  {
    "Brand": "Ford",
    "Model_Year": 2007,
    "Price": 31182.05,
    "Mileage": 126219,
    "Engine_Size": 1.3,
    "Horsepower": 192
  },
  {
    "Brand": "BMW",
    "Model_Year": 2016,
    "Price": 52879.55,
    "Mileage": 88029,
    "Engine_Size": 4.6,
    "Horsepower": 107
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2017,
    "Price": 41495.15,
    "Mileage": 44697,
    "Engine_Size": 1.8,
    "Horsepower": 192
  },
  {
    "Brand": "Ford",
    "Model_Year": 2017,
    "Price": 63408.3,
    "Mileage": 22634,
    "Engine_Size": 4.3,
    "Horsepower": 387
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2014,
    "Price": 45296.0,
    "Mileage": 130520,
    "Engine_Size": 3.2,
    "Horsepower": 225
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2008,
    "Price": 43863.95,
    "Mileage": 29561,
    "Engine_Size": 1.3,
    "Horsepower": 370
  },
  {
    "Brand": "Honda",
    "Model_Year": 2013,
    "Price": 58999.75,
    "Mileage": 154105,
    "Engine_Size": 4.8,
    "Horsepower": 390
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2006,
    "Price": 29836.85,
    "Mileage": 60063,
    "Engine_Size": 2.0,
    "Horsepower": 136
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2023,
    "Price": 60711.95,
    "Mileage": 30921,
    "Engine_Size": 4.4,
    "Horsepower": 202
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2005,
    "Price": 33830.0,
    "Mileage": 24340,
    "Engine_Size": 1.7,
    "Horsepower": 209
  },
  {
    "Brand": "Honda",
    "Model_Year": 2011,
    "Price": 47439.95,
    "Mileage": 67781,
    "Engine_Size": 4.4,
    "Horsepower": 151
  },
  {
    "Brand": "BMW",
    "Model_Year": 2021,
    "Price": 44280.95,
    "Mileage": 19901,
    "Engine_Size": 1.1,
    "Horsepower": 127
  },
  {
    "Brand": "Honda",
    "Model_Year": 2007,
    "Price": 44550.1,
    "Mileage": 15638,
    "Engine_Size": 3.0,
    "Horsepower": 218
  },
  {
    "Brand": "Honda",
    "Model_Year": 2007,
    "Price": 38951.6,
    "Mileage": 174668,
    "Engine_Size": 4.1,
    "Horsepower": 200
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2007,
    "Price": 50680.8,
    "Mileage": 49324,
    "Engine_Size": 4.7,
    "Horsepower": 138
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2021,
    "Price": 63729.2,
    "Mileage": 93356,
    "Engine_Size": 4.6,
    "Horsepower": 319
  },
  {
    "Brand": "Ford",
    "Model_Year": 2011,
    "Price": 64310.9,
    "Mileage": 37642,
    "Engine_Size": 4.3,
    "Horsepower": 389
  },
  {
    "Brand": "Ford",
    "Model_Year": 2018,
    "Price": 57260.1,
    "Mileage": 30378,
    "Engine_Size": 4.6,
    "Horsepower": 246
  },
  {
    "Brand": "BMW",
    "Model_Year": 2021,
    "Price": 46633.65,
    "Mileage": 55867,
    "Engine_Size": 1.8,
    "Horsepower": 141
  },
  {
    "Brand": "BMW",
    "Model_Year": 2022,
    "Price": 44174.7,
    "Mileage": 78686,
    "Engine_Size": 2.1,
    "Horsepower": 86
  },
  {
    "Brand": "Ford",
    "Model_Year": 2017,
    "Price": 55329.25,
    "Mileage": 47875,
    "Engine_Size": 2.2,
    "Horsepower": 398
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2022,
    "Price": 49960.45,
    "Mileage": 123171,
    "Engine_Size": 2.5,
    "Horsepower": 229
  },
  {
    "Brand": "Ford",
    "Model_Year": 2008,
    "Price": 31868.95,
    "Mileage": 105061,
    "Engine_Size": 2.6,
    "Horsepower": 139
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2005,
    "Price": 41207.15,
    "Mileage": 69377,
    "Engine_Size": 3.2,
    "Horsepower": 182
  },
  {
    "Brand": "BMW",
    "Model_Year": 2022,
    "Price": 54183.45,
    "Mileage": 59691,
    "Engine_Size": 1.6,
    "Horsepower": 301
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2005,
    "Price": 29777.45,
    "Mileage": 196911,
    "Engine_Size": 3.8,
    "Horsepower": 90
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2017,
    "Price": 43407.85,
    "Mileage": 54063,
    "Engine_Size": 1.7,
    "Horsepower": 204
  },
  {
    "Brand": "BMW",
    "Model_Year": 2014,
    "Price": 49434.9,
    "Mileage": 96782,
    "Engine_Size": 2.2,
    "Horsepower": 332
  },
  {
    "Brand": "BMW",
    "Model_Year": 2015,
    "Price": 44455.85,
    "Mileage": 83343,
    "Engine_Size": 3.0,
    "Horsepower": 180
  },
  {
    "Brand": "Honda",
    "Model_Year": 2013,
    "Price": 55149.45,
    "Mileage": 88071,
    "Engine_Size": 4.2,
    "Horsepower": 315
  },
  {
    "Brand": "Honda",
    "Model_Year": 2013,
    "Price": 53499.8,
    "Mileage": 141564,
    "Engine_Size": 4.0,
    "Horsepower": 352
  },
  {
    "Brand": "Honda",
    "Model_Year": 2009,
    "Price": 33061.05,
    "Mileage": 126399,
    "Engine_Size": 3.6,
    "Horsepower": 77
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2005,
    "Price": 43580.15,
    "Mileage": 36357,
    "Engine_Size": 1.6,
    "Horsepower": 353
  },
  {
    "Brand": "Honda",
    "Model_Year": 2021,
    "Price": 58342.3,
    "Mileage": 37314,
    "Engine_Size": 3.2,
    "Horsepower": 276
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2006,
    "Price": 27950.55,
    "Mileage": 184769,
    "Engine_Size": 1.3,
    "Horsepower": 263
  },
  {
    "Brand": "Ford",
    "Model_Year": 2017,
    "Price": 43343.85,
    "Mileage": 75283,
    "Engine_Size": 2.5,
    "Horsepower": 116
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2013,
    "Price": 50944.65,
    "Mileage": 64567,
    "Engine_Size": 2.7,
    "Horsepower": 311
  },
  {
    "Brand": "BMW",
    "Model_Year": 2008,
    "Price": 30355.7,
    "Mileage": 52006,
    "Engine_Size": 1.2,
    "Horsepower": 79
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2009,
    "Price": 35836.85,
    "Mileage": 196083,
    "Engine_Size": 2.1,
    "Horsepower": 358
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2015,
    "Price": 52642.1,
    "Mileage": 146758,
    "Engine_Size": 4.8,
    "Horsepower": 200
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2023,
    "Price": 63551.95,
    "Mileage": 173521,
    "Engine_Size": 4.8,
    "Horsepower": 339
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2007,
    "Price": 43768.7,
    "Mileage": 66606,
    "Engine_Size": 2.4,
    "Horsepower": 371
  },
  {
    "Brand": "BMW",
    "Model_Year": 2016,
    "Price": 37565.45,
    "Mileage": 23891,
    "Engine_Size": 1.2,
    "Horsepower": 130
  },
  {
    "Brand": "Ford",
    "Model_Year": 2023,
    "Price": 42268.65,
    "Mileage": 188187,
    "Engine_Size": 1.7,
    "Horsepower": 233
  },
  {
    "Brand": "Honda",
    "Model_Year": 2023,
    "Price": 43660.4,
    "Mileage": 106732,
    "Engine_Size": 2.6,
    "Horsepower": 82
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2017,
    "Price": 57964.45,
    "Mileage": 196791,
    "Engine_Size": 4.8,
    "Horsepower": 341
  },
  {
    "Brand": "Ford",
    "Model_Year": 2011,
    "Price": 39240.25,
    "Mileage": 172795,
    "Engine_Size": 1.6,
    "Horsepower": 277
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2019,
    "Price": 61943.15,
    "Mileage": 34877,
    "Engine_Size": 4.1,
    "Horsepower": 315
  },
  {
    "Brand": "BMW",
    "Model_Year": 2011,
    "Price": 37714.7,
    "Mileage": 19026,
    "Engine_Size": 1.4,
    "Horsepower": 202
  },
  {
    "Brand": "BMW",
    "Model_Year": 2012,
    "Price": 61319.9,
    "Mileage": 25422,
    "Engine_Size": 4.9,
    "Horsepower": 313
  },
  {
    "Brand": "BMW",
    "Model_Year": 2009,
    "Price": 42089.2,
    "Mileage": 145316,
    "Engine_Size": 2.5,
    "Horsepower": 363
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2018,
    "Price": 54565.95,
    "Mileage": 38481,
    "Engine_Size": 4.1,
    "Horsepower": 107
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2008,
    "Price": 33782.0,
    "Mileage": 94180,
    "Engine_Size": 2.4,
    "Horsepower": 125
  },
  {
    "Brand": "Ford",
    "Model_Year": 2014,
    "Price": 59195.8,
    "Mileage": 114384,
    "Engine_Size": 3.5,
    "Horsepower": 388
  },
  {
    "Brand": "Ford",
    "Model_Year": 2019,
    "Price": 39292.45,
    "Mileage": 63031,
    "Engine_Size": 1.8,
    "Horsepower": 117
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2022,
    "Price": 38326.35,
    "Mileage": 144593,
    "Engine_Size": 1.6,
    "Horsepower": 174
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2017,
    "Price": 47829.1,
    "Mileage": 137818,
    "Engine_Size": 4.8,
    "Horsepower": 128
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2012,
    "Price": 53910.65,
    "Mileage": 88127,
    "Engine_Size": 4.7,
    "Horsepower": 146
  },
  {
    "Brand": "BMW",
    "Model_Year": 2013,
    "Price": 57436.3,
    "Mileage": 97254,
    "Engine_Size": 4.5,
    "Horsepower": 287
  },
  {
    "Brand": "Ford",
    "Model_Year": 2020,
    "Price": 49109.4,
    "Mileage": 73232,
    "Engine_Size": 3.5,
    "Horsepower": 124
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2023,
    "Price": 49817.8,
    "Mileage": 148084,
    "Engine_Size": 4.2,
    "Horsepower": 124
  },
  {
    "Brand": "BMW",
    "Model_Year": 2020,
    "Price": 42130.8,
    "Mileage": 85224,
    "Engine_Size": 1.3,
    "Horsepower": 198
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2011,
    "Price": 33089.55,
    "Mileage": 159529,
    "Engine_Size": 2.3,
    "Horsepower": 154
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2018,
    "Price": 48371.0,
    "Mileage": 34960,
    "Engine_Size": 2.3,
    "Horsepower": 283
  },
  {
    "Brand": "BMW",
    "Model_Year": 2018,
    "Price": 47915.25,
    "Mileage": 92695,
    "Engine_Size": 3.5,
    "Horsepower": 184
  },
  {
    "Brand": "BMW",
    "Model_Year": 2008,
    "Price": 43693.7,
    "Mileage": 135066,
    "Engine_Size": 2.4,
    "Horsepower": 383
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2019,
    "Price": 50275.9,
    "Mileage": 143982,
    "Engine_Size": 1.6,
    "Horsepower": 362
  },
  {
    "Brand": "Honda",
    "Model_Year": 2007,
    "Price": 42951.35,
    "Mileage": 7693,
    "Engine_Size": 3.4,
    "Horsepower": 118
  },
  {
    "Brand": "Ford",
    "Model_Year": 2009,
    "Price": 43212.35,
    "Mileage": 120313,
    "Engine_Size": 4.3,
    "Horsepower": 136
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2005,
    "Price": 35184.5,
    "Mileage": 151930,
    "Engine_Size": 2.5,
    "Horsepower": 344
  },
  {
    "Brand": "Honda",
    "Model_Year": 2007,
    "Price": 34045.5,
    "Mileage": 33810,
    "Engine_Size": 1.5,
    "Horsepower": 198
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2019,
    "Price": 42019.4,
    "Mileage": 25092,
    "Engine_Size": 1.8,
    "Horsepower": 98
  },
  {
    "Brand": "BMW",
    "Model_Year": 2012,
    "Price": 29742.4,
    "Mileage": 184772,
    "Engine_Size": 1.9,
    "Horsepower": 102
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2008,
    "Price": 39588.75,
    "Mileage": 63105,
    "Engine_Size": 2.2,
    "Horsepower": 188
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2006,
    "Price": 44351.15,
    "Mileage": 166577,
    "Engine_Size": 3.6,
    "Horsepower": 249
  },
  {
    "Brand": "Ford",
    "Model_Year": 2014,
    "Price": 51614.25,
    "Mileage": 33555,
    "Engine_Size": 3.4,
    "Horsepower": 220
  },
  {
    "Brand": "Honda",
    "Model_Year": 2008,
    "Price": 43860.3,
    "Mileage": 76934,
    "Engine_Size": 3.8,
    "Horsepower": 202
  },
  {
    "Brand": "Ford",
    "Model_Year": 2007,
    "Price": 49445.6,
    "Mileage": 77788,
    "Engine_Size": 2.5,
    "Horsepower": 396
  },
  {
    "Brand": "BMW",
    "Model_Year": 2006,
    "Price": 47835.15,
    "Mileage": 82257,
    "Engine_Size": 4.3,
    "Horsepower": 254
  },
  {
    "Brand": "Ford",
    "Model_Year": 2021,
    "Price": 46805.05,
    "Mileage": 22939,
    "Engine_Size": 1.8,
    "Horsepower": 203
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2017,
    "Price": 43696.15,
    "Mileage": 147897,
    "Engine_Size": 2.9,
    "Horsepower": 246
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2009,
    "Price": 35917.85,
    "Mileage": 160223,
    "Engine_Size": 4.2,
    "Horsepower": 91
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2013,
    "Price": 40681.6,
    "Mileage": 133068,
    "Engine_Size": 1.7,
    "Horsepower": 310
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2010,
    "Price": 36881.2,
    "Mileage": 5036,
    "Engine_Size": 1.4,
    "Horsepower": 146
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2009,
    "Price": 49917.6,
    "Mileage": 98948,
    "Engine_Size": 4.5,
    "Horsepower": 273
  },
  {
    "Brand": "BMW",
    "Model_Year": 2014,
    "Price": 37362.65,
    "Mileage": 88707,
    "Engine_Size": 2.4,
    "Horsepower": 73
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2012,
    "Price": 55208.45,
    "Mileage": 44051,
    "Engine_Size": 3.7,
    "Horsepower": 397
  },
  {
    "Brand": "Honda",
    "Model_Year": 2011,
    "Price": 34614.1,
    "Mileage": 85738,
    "Engine_Size": 1.1,
    "Horsepower": 234
  },
  {
    "Brand": "Ford",
    "Model_Year": 2011,
    "Price": 44836.2,
    "Mileage": 78596,
    "Engine_Size": 3.8,
    "Horsepower": 197
  },
  {
    "Brand": "BMW",
    "Model_Year": 2010,
    "Price": 39731.45,
    "Mileage": 65071,
    "Engine_Size": 2.3,
    "Horsepower": 114
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2007,
    "Price": 32823.35,
    "Mileage": 135613,
    "Engine_Size": 1.2,
    "Horsepower": 287
  },
  {
    "Brand": "Ford",
    "Model_Year": 2023,
    "Price": 62499.95,
    "Mileage": 78601,
    "Engine_Size": 3.4,
    "Horsepower": 304
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2019,
    "Price": 50267.35,
    "Mileage": 34873,
    "Engine_Size": 2.0,
    "Horsepower": 205
  },
  {
    "Brand": "Ford",
    "Model_Year": 2008,
    "Price": 33912.0,
    "Mileage": 172720,
    "Engine_Size": 2.5,
    "Horsepower": 237
  },
  {
    "Brand": "Honda",
    "Model_Year": 2016,
    "Price": 40435.6,
    "Mileage": 76468,
    "Engine_Size": 1.3,
    "Horsepower": 306
  },
  {
    "Brand": "BMW",
    "Model_Year": 2010,
    "Price": 36763.5,
    "Mileage": 31470,
    "Engine_Size": 1.6,
    "Horsepower": 162
  },
  {
    "Brand": "Ford",
    "Model_Year": 2023,
    "Price": 46555.6,
    "Mileage": 13328,
    "Engine_Size": 2.2,
    "Horsepower": 74
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2008,
    "Price": 33348.75,
    "Mileage": 142405,
    "Engine_Size": 1.4,
    "Horsepower": 225
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2019,
    "Price": 59934.35,
    "Mileage": 126173,
    "Engine_Size": 4.6,
    "Horsepower": 314
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2013,
    "Price": 37128.1,
    "Mileage": 51638,
    "Engine_Size": 1.0,
    "Horsepower": 150
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2009,
    "Price": 50236.6,
    "Mileage": 16268,
    "Engine_Size": 2.9,
    "Horsepower": 316
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2017,
    "Price": 41344.0,
    "Mileage": 118920,
    "Engine_Size": 1.5,
    "Horsepower": 206
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2022,
    "Price": 40017.05,
    "Mileage": 115379,
    "Engine_Size": 2.2,
    "Horsepower": 132
  },
  {
    "Brand": "Ford",
    "Model_Year": 2009,
    "Price": 58526.15,
    "Mileage": 153117,
    "Engine_Size": 4.7,
    "Horsepower": 376
  },
  {
    "Brand": "Ford",
    "Model_Year": 2020,
    "Price": 39156.35,
    "Mileage": 176813,
    "Engine_Size": 1.6,
    "Horsepower": 185
  },
  {
    "Brand": "Ford",
    "Model_Year": 2023,
    "Price": 54691.9,
    "Mileage": 178842,
    "Engine_Size": 4.9,
    "Horsepower": 182
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2018,
    "Price": 42125.65,
    "Mileage": 12887,
    "Engine_Size": 1.8,
    "Horsepower": 100
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2020,
    "Price": 50186.1,
    "Mileage": 29918,
    "Engine_Size": 4.0,
    "Horsepower": 76
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2019,
    "Price": 47024.15,
    "Mileage": 40497,
    "Engine_Size": 3.2,
    "Horsepower": 72
  },
  {
    "Brand": "Ford",
    "Model_Year": 2008,
    "Price": 56582.9,
    "Mileage": 98562,
    "Engine_Size": 4.5,
    "Horsepower": 376
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2011,
    "Price": 43998.95,
    "Mileage": 197081,
    "Engine_Size": 3.2,
    "Horsepower": 312
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2020,
    "Price": 51918.55,
    "Mileage": 16929,
    "Engine_Size": 3.1,
    "Horsepower": 125
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2012,
    "Price": 34078.95,
    "Mileage": 107201,
    "Engine_Size": 1.8,
    "Horsepower": 142
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2021,
    "Price": 35885.3,
    "Mileage": 197834,
    "Engine_Size": 1.7,
    "Horsepower": 79
  },
  {
    "Brand": "Honda",
    "Model_Year": 2020,
    "Price": 51805.7,
    "Mileage": 121566,
    "Engine_Size": 4.7,
    "Horsepower": 130
  },
  {
    "Brand": "BMW",
    "Model_Year": 2014,
    "Price": 39490.7,
    "Mileage": 33546,
    "Engine_Size": 2.3,
    "Horsepower": 119
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2014,
    "Price": 34200.5,
    "Mileage": 173410,
    "Engine_Size": 2.5,
    "Horsepower": 191
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2006,
    "Price": 43059.25,
    "Mileage": 170355,
    "Engine_Size": 4.0,
    "Horsepower": 244
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2013,
    "Price": 38600.3,
    "Mileage": 87494,
    "Engine_Size": 2.4,
    "Horsepower": 70
  },
  {
    "Brand": "Honda",
    "Model_Year": 2021,
    "Price": 61540.7,
    "Mileage": 51566,
    "Engine_Size": 4.8,
    "Horsepower": 107
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2015,
    "Price": 54499.8,
    "Mileage": 90464,
    "Engine_Size": 4.0,
    "Horsepower": 259
  },
  {
    "Brand": "Honda",
    "Model_Year": 2014,
    "Price": 39473.05,
    "Mileage": 133279,
    "Engine_Size": 3.4,
    "Horsepower": 148
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2021,
    "Price": 59237.45,
    "Mileage": 86991,
    "Engine_Size": 4.5,
    "Horsepower": 259
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2008,
    "Price": 34582.0,
    "Mileage": 97680,
    "Engine_Size": 1.2,
    "Horsepower": 253
  },
  {
    "Brand": "BMW",
    "Model_Year": 2020,
    "Price": 46949.35,
    "Mileage": 33013,
    "Engine_Size": 2.0,
    "Horsepower": 136
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2019,
    "Price": 42137.4,
    "Mileage": 57132,
    "Engine_Size": 2.9,
    "Horsepower": 86
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2009,
    "Price": 40812.2,
    "Mileage": 164156,
    "Engine_Size": 1.9,
    "Horsepower": 385
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2010,
    "Price": 57508.25,
    "Mileage": 112855,
    "Engine_Size": 4.0,
    "Horsepower": 365
  },
  {
    "Brand": "Ford",
    "Model_Year": 2021,
    "Price": 60269.25,
    "Mileage": 157215,
    "Engine_Size": 4.7,
    "Horsepower": 278
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2005,
    "Price": 31533.65,
    "Mileage": 96627,
    "Engine_Size": 2.7,
    "Horsepower": 110
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2023,
    "Price": 47214.4,
    "Mileage": 127772,
    "Engine_Size": 2.4,
    "Horsepower": 184
  },
  {
    "Brand": "BMW",
    "Model_Year": 2008,
    "Price": 45182.45,
    "Mileage": 150251,
    "Engine_Size": 4.8,
    "Horsepower": 169
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2021,
    "Price": 44498.1,
    "Mileage": 194798,
    "Engine_Size": 2.8,
    "Horsepower": 208
  },
  {
    "Brand": "BMW",
    "Model_Year": 2013,
    "Price": 50189.3,
    "Mileage": 146294,
    "Engine_Size": 3.0,
    "Horsepower": 385
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2006,
    "Price": 41376.15,
    "Mileage": 196037,
    "Engine_Size": 2.4,
    "Horsepower": 393
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2012,
    "Price": 58611.6,
    "Mileage": 69068,
    "Engine_Size": 4.6,
    "Horsepower": 371
  },
  {
    "Brand": "Ford",
    "Model_Year": 2019,
    "Price": 57786.95,
    "Mileage": 160021,
    "Engine_Size": 3.3,
    "Horsepower": 363
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2011,
    "Price": 41175.2,
    "Mileage": 21116,
    "Engine_Size": 4.0,
    "Horsepower": 86
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2010,
    "Price": 51309.8,
    "Mileage": 187124,
    "Engine_Size": 4.2,
    "Horsepower": 391
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2005,
    "Price": 46824.55,
    "Mileage": 56369,
    "Engine_Size": 2.4,
    "Horsepower": 361
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2019,
    "Price": 37465.55,
    "Mileage": 184889,
    "Engine_Size": 2.7,
    "Horsepower": 143
  },
  {
    "Brand": "Ford",
    "Model_Year": 2011,
    "Price": 52288.0,
    "Mileage": 108100,
    "Engine_Size": 4.4,
    "Horsepower": 332
  },
  {
    "Brand": "Ford",
    "Model_Year": 2021,
    "Price": 45505.25,
    "Mileage": 34655,
    "Engine_Size": 2.5,
    "Horsepower": 85
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2006,
    "Price": 32255.300000000003,
    "Mileage": 193874,
    "Engine_Size": 4.2,
    "Horsepower": 83
  },
  {
    "Brand": "Honda",
    "Model_Year": 2013,
    "Price": 61564.4,
    "Mileage": 52632,
    "Engine_Size": 4.8,
    "Horsepower": 350
  },
  {
    "Brand": "Honda",
    "Model_Year": 2013,
    "Price": 39721.75,
    "Mileage": 150265,
    "Engine_Size": 3.5,
    "Horsepower": 73
  },
  {
    "Brand": "Ford",
    "Model_Year": 2017,
    "Price": 49413.6,
    "Mileage": 166848,
    "Engine_Size": 4.0,
    "Horsepower": 196
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2010,
    "Price": 48371.15,
    "Mileage": 179297,
    "Engine_Size": 4.2,
    "Horsepower": 381
  },
  {
    "Brand": "Honda",
    "Model_Year": 2010,
    "Price": 35394.9,
    "Mileage": 196082,
    "Engine_Size": 4.4,
    "Horsepower": 75
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2007,
    "Price": 31593.800000000003,
    "Mileage": 184884,
    "Engine_Size": 2.6,
    "Horsepower": 198
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2021,
    "Price": 49895.25,
    "Mileage": 23895,
    "Engine_Size": 1.2,
    "Horsepower": 301
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2021,
    "Price": 53738.95,
    "Mileage": 157281,
    "Engine_Size": 2.6,
    "Horsepower": 382
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2016,
    "Price": 51909.05,
    "Mileage": 197879,
    "Engine_Size": 3.7,
    "Horsepower": 264
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2020,
    "Price": 49411.7,
    "Mileage": 28086,
    "Engine_Size": 2.8,
    "Horsepower": 134
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2019,
    "Price": 67042.15,
    "Mileage": 90637,
    "Engine_Size": 4.0,
    "Horsepower": 390
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2017,
    "Price": 41607.05,
    "Mileage": 163279,
    "Engine_Size": 2.4,
    "Horsepower": 172
  },
  {
    "Brand": "Ford",
    "Model_Year": 2005,
    "Price": 45435.3,
    "Mileage": 112334,
    "Engine_Size": 3.5,
    "Horsepower": 346
  },
  {
    "Brand": "Honda",
    "Model_Year": 2021,
    "Price": 41220.55,
    "Mileage": 156969,
    "Engine_Size": 1.7,
    "Horsepower": 227
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2007,
    "Price": 48181.85,
    "Mileage": 68083,
    "Engine_Size": 4.0,
    "Horsepower": 293
  },
  {
    "Brand": "Honda",
    "Model_Year": 2019,
    "Price": 56333.6,
    "Mileage": 100028,
    "Engine_Size": 3.2,
    "Horsepower": 358
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2008,
    "Price": 41151.15,
    "Mileage": 71957,
    "Engine_Size": 1.8,
    "Horsepower": 347
  },
  {
    "Brand": "Honda",
    "Model_Year": 2008,
    "Price": 39582.45,
    "Mileage": 102551,
    "Engine_Size": 2.2,
    "Horsepower": 251
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2022,
    "Price": 53190.7,
    "Mileage": 83506,
    "Engine_Size": 4.0,
    "Horsepower": 73
  },
  {
    "Brand": "Honda",
    "Model_Year": 2021,
    "Price": 51743.25,
    "Mileage": 143355,
    "Engine_Size": 2.9,
    "Horsepower": 284
  },
  {
    "Brand": "Honda",
    "Model_Year": 2023,
    "Price": 48859.8,
    "Mileage": 99024,
    "Engine_Size": 1.9,
    "Horsepower": 286
  },
  {
    "Brand": "Honda",
    "Model_Year": 2015,
    "Price": 61632.95,
    "Mileage": 86481,
    "Engine_Size": 4.9,
    "Horsepower": 278
  },
  {
    "Brand": "Honda",
    "Model_Year": 2007,
    "Price": 43433.25,
    "Mileage": 5255,
    "Engine_Size": 3.9,
    "Horsepower": 143
  },
  {
    "Brand": "Ford",
    "Model_Year": 2012,
    "Price": 61727.65,
    "Mileage": 20487,
    "Engine_Size": 4.8,
    "Horsepower": 296
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2018,
    "Price": 47952.7,
    "Mileage": 24346,
    "Engine_Size": 2.7,
    "Horsepower": 162
  },
  {
    "Brand": "BMW",
    "Model_Year": 2005,
    "Price": 37118.5,
    "Mileage": 40050,
    "Engine_Size": 2.9,
    "Horsepower": 134
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2018,
    "Price": 72267.8,
    "Mileage": 13744,
    "Engine_Size": 4.6,
    "Horsepower": 390
  },
  {
    "Brand": "BMW",
    "Model_Year": 2006,
    "Price": 31891.6,
    "Mileage": 160828,
    "Engine_Size": 3.1,
    "Horsepower": 79
  },
  {
    "Brand": "BMW",
    "Model_Year": 2008,
    "Price": 53931.2,
    "Mileage": 66596,
    "Engine_Size": 3.8,
    "Horsepower": 372
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2023,
    "Price": 53834.1,
    "Mileage": 161218,
    "Engine_Size": 2.0,
    "Horsepower": 391
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2010,
    "Price": 48402.0,
    "Mileage": 124640,
    "Engine_Size": 2.8,
    "Horsepower": 374
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2005,
    "Price": 41911.4,
    "Mileage": 60032,
    "Engine_Size": 1.5,
    "Horsepower": 347
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2021,
    "Price": 44018.65,
    "Mileage": 47687,
    "Engine_Size": 1.8,
    "Horsepower": 155
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2012,
    "Price": 20840.25,
    "Mileage": 182175,
    "Engine_Size": 1.0,
    "Horsepower": 95
  },
  {
    "Brand": "Honda",
    "Model_Year": 2023,
    "Price": 44734.6,
    "Mileage": 158048,
    "Engine_Size": 1.2,
    "Horsepower": 287
  },
  {
    "Brand": "Ford",
    "Model_Year": 2005,
    "Price": 48441.85,
    "Mileage": 67863,
    "Engine_Size": 4.9,
    "Horsepower": 164
  },
  {
    "Brand": "Honda",
    "Model_Year": 2009,
    "Price": 41419.85,
    "Mileage": 136663,
    "Engine_Size": 2.0,
    "Horsepower": 313
  },
  {
    "Brand": "Ford",
    "Model_Year": 2020,
    "Price": 54726.15,
    "Mileage": 11277,
    "Engine_Size": 3.7,
    "Horsepower": 176
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2010,
    "Price": 57250.0,
    "Mileage": 66860,
    "Engine_Size": 4.4,
    "Horsepower": 317
  },
  {
    "Brand": "Ford",
    "Model_Year": 2012,
    "Price": 36110.4,
    "Mileage": 138332,
    "Engine_Size": 3.2,
    "Horsepower": 83
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2017,
    "Price": 47972.95,
    "Mileage": 29741,
    "Engine_Size": 1.6,
    "Horsepower": 230
  },
  {
    "Brand": "BMW",
    "Model_Year": 2020,
    "Price": 49082.0,
    "Mileage": 124720,
    "Engine_Size": 3.9,
    "Horsepower": 140
  },
  {
    "Brand": "BMW",
    "Model_Year": 2007,
    "Price": 44401.45,
    "Mileage": 42211,
    "Engine_Size": 3.4,
    "Horsepower": 221
  },
  {
    "Brand": "Ford",
    "Model_Year": 2023,
    "Price": 49746.3,
    "Mileage": 177614,
    "Engine_Size": 3.9,
    "Horsepower": 144
  },
  {
    "Brand": "Ford",
    "Model_Year": 2016,
    "Price": 60961.55,
    "Mileage": 11869,
    "Engine_Size": 4.1,
    "Horsepower": 284
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2020,
    "Price": 55088.2,
    "Mileage": 92616,
    "Engine_Size": 4.9,
    "Horsepower": 120
  },
  {
    "Brand": "Honda",
    "Model_Year": 2015,
    "Price": 46919.25,
    "Mileage": 99515,
    "Engine_Size": 3.3,
    "Horsepower": 212
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2014,
    "Price": 37279.3,
    "Mileage": 155494,
    "Engine_Size": 2.4,
    "Horsepower": 105
  },
  {
    "Brand": "Honda",
    "Model_Year": 2008,
    "Price": 43157.75,
    "Mileage": 171685,
    "Engine_Size": 3.6,
    "Horsepower": 236
  },
  {
    "Brand": "BMW",
    "Model_Year": 2016,
    "Price": 34422.6,
    "Mileage": 193088,
    "Engine_Size": 1.3,
    "Horsepower": 305
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2006,
    "Price": 53916.5,
    "Mileage": 65110,
    "Engine_Size": 4.6,
    "Horsepower": 329
  },
  {
    "Brand": "Ford",
    "Model_Year": 2023,
    "Price": 52847.35,
    "Mileage": 39033,
    "Engine_Size": 1.5,
    "Horsepower": 261
  },
  {
    "Brand": "Honda",
    "Model_Year": 2009,
    "Price": 46463.35,
    "Mileage": 50213,
    "Engine_Size": 2.3,
    "Horsepower": 271
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2012,
    "Price": 52950.75,
    "Mileage": 198065,
    "Engine_Size": 4.3,
    "Horsepower": 331
  },
  {
    "Brand": "BMW",
    "Model_Year": 2011,
    "Price": 50765.1,
    "Mileage": 17938,
    "Engine_Size": 3.4,
    "Horsepower": 254
  },
  {
    "Brand": "Honda",
    "Model_Year": 2018,
    "Price": 46721.9,
    "Mileage": 135842,
    "Engine_Size": 2.6,
    "Horsepower": 227
  },
  {
    "Brand": "Tesla",
    "Model_Year": 2007,
    "Price": 51050.3,
    "Mileage": 7274,
    "Engine_Size": 2.9,
    "Horsepower": 315
  },
  {
    "Brand": "Ford",
    "Model_Year": 2022,
    "Price": 53926.5,
    "Mileage": 89390,
    "Engine_Size": 4.4,
    "Horsepower": 179
  },
  {
    "Brand": "Ford",
    "Model_Year": 2020,
    "Price": 39122.65,
    "Mileage": 167887,
    "Engine_Size": 2.4,
    "Horsepower": 168
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2023,
    "Price": 61734.35,
    "Mileage": 155033,
    "Engine_Size": 4.5,
    "Horsepower": 310
  },
  {
    "Brand": "Toyota",
    "Model_Year": 2023,
    "Price": 48467.8,
    "Mileage": 25044,
    "Engine_Size": 1.4,
    "Horsepower": 271
  },
  {
    "Brand": "Hyundai",
    "Model_Year": 2022,
    "Price": 55714.4,
    "Mileage": 104372,
    "Engine_Size": 4.1,
    "Horsepower": 191
  },
  {
    "Brand": "BMW",
    "Model_Year": 2020,
    "Price": 53222.65,
    "Mileage": 158047,
    "Engine_Size": 4.4,
    "Horsepower": 186
  },
  {
    "Brand": "Honda",
    "Model_Year": 2012,
    "Price": 40687.7,
    "Mileage": 19706,
    "Engine_Size": 1.7,
    "Horsepower": 165
  }
];
