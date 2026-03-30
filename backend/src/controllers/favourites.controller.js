const FavouritesModel = require("../models/favourites.model");
const PropertiesModel = require("../models/property.model");

const { isTokenValid } = require("../utilities/jwt.utilities");

async function addFavourite(req, res) {
  try {
    const propertyId = req.params.propertyId;

    const decoded = isTokenValid(req);

    if (!decoded) {
      return res.status(401).json({
        message: "User not authenticated",
      });
    }

    const hasFavourite = await FavouritesModel.findOne({
      propertyId: propertyId,
      userId: decoded.id,
    });

    if (hasFavourite) {
      return res.status(409).json({
        message: "Is already favourite",
      });
    }
    await FavouritesModel.create({
      userId: decoded.id,
      propertyId: propertyId,
    });

    res.status(201).json({
      message: "Added to favourite",
    });
  } catch {
    res.status(400).json({
      message: "Something went wrong please try again later",
    });
  }
}

async function removeFavourite(req, res) {
  try {
    const propertyId = req.params.propertyId;

    const decoded = isTokenValid(req);

    if (!decoded) {
      return res.status(401).json({
        message: "User not authenticated",
      });
    }

    console.log("ssssss", decoded);

    const hasFavourite = await FavouritesModel.findOne({
      propertyId: propertyId,
      userId: decoded.id,
    });

    if (!hasFavourite) {
      return res.status(409).json({
        message: "Is not favourite",
      });
    }
    await FavouritesModel.deleteOne({
      userId: decoded.id,
      propertyId: propertyId,
    });

    res.status(201).json({
      message: "Removed from favourite",
    });
  } catch {
    res.status(400).json({
      message: "Something went wrong please try again later",
    });
  }
}

async function getUserFavourites(req, res) {
  try {
    const decoded = isTokenValid(req);
    if (!decoded) {
      return res.status(401).json({
        message: "User not authenticated",
      });
    }

    // selecting user favourites
    let favourites = await FavouritesModel.find({
      userId: decoded.id,
    });

    console.log(favourites);

    let properties = await PropertiesModel.find({
      _id: { $in: favourites.map((fav) => fav.propertyId) },
    });

    // adding isFavourite attribuite
    const propertiesWithFavourite = properties.map((property) => ({
      // converts mongoose doc to plain object
      ...property._doc,
      isFavourite: true,
    }));

    // sending a succes response
    res.status(200).json({
      properties: propertiesWithFavourite,
    });
  } catch {
    res.status(400).json({
      message: "Something went wrong please try again later",
    });
  }
}

module.exports = { addFavourite, getUserFavourites, removeFavourite };
