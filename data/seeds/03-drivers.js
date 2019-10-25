exports.seed = function(knex) {
  return knex("drivers").insert([
    {
      id: 1,
      name: "Nviiri Brian",
      lat: "0.7954328",
      long: "33.4547664",
      phone_number: "699699699",
      village_id: 1,
      availability: true,
      reliability: 4
    },
    {
      id: 2,
      name: "Brian Chong",
      lat: "0.8254328",
      long: "40.4547664",
      phone_number: "699699698",
      village_id: 1,
      availability: true,
      reliability: 4
    },
    {
      id: 3,
      name: "Cheetos Cheetah",
      lat: "0.8254328",
      long: "40.4547664",
      phone_number: "699699681",
      village_id: 1,
      availability: false,
      reliability: 4
    },

    {
      id: 4,
      name: "Deer Belieff",
      lat: "1.8254328",
      long: "50.4547664",
      phone_number: "699699695",
      village_id: 1,
      availability: true,
      reliability: 3
    },

    {
      id: 5,
      name: "Mugeere Erifazi",
      lat: "0.7954328",
      long: "33.4547664",
      phone_number: "699699697",
      village_id: 2,
      availability: true,
      reliability: 5
    },

    {
      id: 6,
      name: "Dembe Erifazi",
      lat: "-0.847919",
      long: "30.905961",
      phone_number: "699699679",
      village_id: 1,
      availability: false,
      reliability: 5
    }
  ]);
};