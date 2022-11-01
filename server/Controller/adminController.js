const serviceModel = require("../Model/serviceModel");

// let services = [
//   {
//     servicetype: "Styling",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed sem malesuada, tempus massa id, tempus orci. In non purus felis. Aenean posuere porttitor erat, pellentesque ullamcorper tellus. Nullam consectetur lacinia eleifend. Aliquam quis sodales neque. Donec auctor risus in velit mattis, ac blandit ante porta. Sed dictum faucibus massa eget fringilla. Nullam ultricies laoreet posuere. Phasellus gravida, purus interdum consequat auctor, ex ligula tempus elit, vitae blandit velit nulla non nulla.",
//       image : 'https://i.ibb.co/TbDz1BB/styling.jpg'
//   },
//   {
//     servicetype: "Bath & Tidy Up",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed sem malesuada, tempus massa id, tempus orci. In non purus felis. Aenean posuere porttitor erat, pellentesque ullamcorper tellus. Nullam consectetur lacinia eleifend. Aliquam quis sodales neque. Donec auctor risus in velit mattis, ac blandit ante porta. Sed dictum faucibus massa eget fringilla. Nullam ultricies laoreet posuere. Phasellus gravida, purus interdum consequat auctor, ex ligula tempus elit, vitae blandit velit nulla non nulla.",
//       image : 'https://i.ibb.co/jgW0n6w/bathing.jpg'
//   },
//   {
//     servicetype: "Full Grooming",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed sem malesuada, tempus massa id, tempus orci. In non purus felis. Aenean posuere porttitor erat, pellentesque ullamcorper tellus. Nullam consectetur lacinia eleifend. Aliquam quis sodales neque. Donec auctor risus in velit mattis, ac blandit ante porta. Sed dictum faucibus massa eget fringilla. Nullam ultricies laoreet posuere. Phasellus gravida, purus interdum consequat auctor, ex ligula tempus elit, vitae blandit velit nulla non nulla.",
//       image : 'https://i.ibb.co/pPpSQwq/full-grooming.jpg'
//   },
//   {
//     servicetype: "Delux Bath",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed sem malesuada, tempus massa id, tempus orci. In non purus felis. Aenean posuere porttitor erat, pellentesque ullamcorper tellus. Nullam consectetur lacinia eleifend. Aliquam quis sodales neque. Donec auctor risus in velit mattis, ac blandit ante porta. Sed dictum faucibus massa eget fringilla. Nullam ultricies laoreet posuere. Phasellus gravida, purus interdum consequat auctor, ex ligula tempus elit, vitae blandit velit nulla non nulla.",
//       image : 'https://i.ibb.co/7gWXz06/delux-baht.jpg'
//   },
// ];

module.exports = {
  addServices:  async(req, res, next) => {

    try {
        // const mapping = services.map((x) => {
        //     console.log(x);
        //     // const service = { x.servicetype, x.description, x.image }
        // })
        // console.log(mapping)
        const added = await serviceModel.create(services)
        console.log(added);
        res.status(201).json({created : true})
    } catch (error) {
        res.status(400).json(error.message)
    }
    
  },

  getServices : async (req, res, next) => {
    try {
        // console.log('in service page');
        const services = await serviceModel.find()
        res.status(201).json({fetched : true, services})
    } catch (error) {
        res.status(400).json(error.message)
    }
  },
};
