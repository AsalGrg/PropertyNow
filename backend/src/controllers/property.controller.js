const PropertiesModel = require("../models/property.model");
const FavouritesModel = require("../models/favourites.model");
const { isTokenValid } = require("../utilities/jwt.utilities");

async function addProperty(req, res) {
  // getting request data
  const { title, location, price, imageUrl } = req.body;

  if (!title || !location || !price) {
    return res.status(400).json({
      message: "All field must be filled",
    });
  }

  const createdProperty = await PropertiesModel.create({
    title: title,
    location: location,
    imageUrl: imageUrl,
    price: price,
  });

  res.status(201).json({
    message: "Property Added Successfully",
    property: createdProperty,
  });
}

async function getAllProperties(req, res) {
  try {
    const properties = await PropertiesModel.find();
    const decoded = isTokenValid(req);

    let favourites = [];

    if (decoded) {
      const favoritePropeties = await FavouritesModel.find({
        userId: decoded.id,
      }).select("propertyId");

      // coverting to array
      favourites = favoritePropeties.map((f) => f.propertyId.toString());
    }

    const propertiesWithFavourite = properties.map((property) => ({
      // converts mongoose doc to plain object
      ...property._doc,
      isFavourite: favourites.includes(property._id.toString()),
    }));

    res.status(200).json({
      properties: propertiesWithFavourite,
    });
  } catch {
    res.status(400).json({
      message: "Error fetching properties",
    });
  }
}

module.exports = { addProperty, getAllProperties };
