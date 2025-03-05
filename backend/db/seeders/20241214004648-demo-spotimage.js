'use strict';
/** @type {import('sequelize-cli').Migration} */

const { SpotImage } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  async up() {
    await SpotImage.bulkCreate(
      [
        {
          spotId: 1,
          url: 'https://media.vrbo.com/lodging/79000000/78070000/78060800/78060766/95b368c3.jpg',
          preview: true,
        },
        {
          spotId: 1,
          url: 'https://media.vrbo.com/lodging/79000000/78070000/78060800/78060766/ca9360aa.jpg',
          preview: false,
        },
        {
          spotId: 1,
          url: 'https://media.vrbo.com/lodging/79000000/78070000/78060800/78060766/8ad90e9f.jpg',
          preview: false,
        },
        {
          spotId: 1,
          url: 'https://media.vrbo.com/lodging/79000000/78070000/78060800/78060766/b27a422e.jpg',
          preview: false,
        },
        {
          spotId: 1,
          url: 'https://media.vrbo.com/lodging/79000000/78070000/78060800/78060766/338b8127.jpg',
          preview: false,
        },
        {
          spotId: 2,
          url: 'https://media.vrbo.com/lodging/113000000/112380000/112375200/112375128/95f066bc.jpg',
          preview: true,
        },
        {
          spotId: 2,
          url: 'https://media.vrbo.com/lodging/113000000/112380000/112375200/112375128/dad3ce91.jpg',
          preview: false,
        },
        {
          spotId: 2,
          url: 'https://media.vrbo.com/lodging/113000000/112380000/112375200/112375128/a40ad97f.jpg',
          preview: false,
        },
        {
          spotId: 2,
          url: 'https://media.vrbo.com/lodging/113000000/112380000/112375200/112375128/e66a6e6f.jpg',
          preview: false,
        },
        {
          spotId: 2,
          url: 'https://media.vrbo.com/lodging/113000000/112380000/112375200/112375128/ccdd62d1.jpg',
          preview: false,
        },
        {
          spotId: 3,
          url: 'https://media.vrbo.com/lodging/34000000/33490000/33487700/33487686/9ecac3a4.jpg',
          preview: true,
        },
        {
          spotId: 3,
          url: 'https://media.vrbo.com/lodging/34000000/33490000/33487700/33487686/f5ed1749.jpg',
          preview: false,
        },
        {
          spotId: 3,
          url: 'https://media.vrbo.com/lodging/34000000/33490000/33487700/33487686/df93a922.jpg',
          preview: false,
        },
        {
          spotId: 3,
          url: 'https://media.vrbo.com/lodging/34000000/33490000/33487700/33487686/dc4e4f17.jpg',
          preview: false,
        },
        {
          spotId: 3,
          url: 'https://media.vrbo.com/lodging/34000000/33490000/33487700/33487686/91dd23f3.jpg',
          preview: false,
        },
        {
          spotId: 4,
          url: 'https://media.vrbo.com/lodging/110000000/109060000/109058700/109058620/b85b93d8.jpg',
          preview: true,
        },
        {
          spotId: 4,
          url: 'https://media.vrbo.com/lodging/110000000/109060000/109058700/109058620/64552dd3.jpg',
          preview: false,
        },
        {
          spotId: 4,
          url: 'https://media.vrbo.com/lodging/110000000/109060000/109058700/109058620/f47d4c34.jpg',
          preview: false,
        },
        {
          spotId: 4,
          url: 'https://media.vrbo.com/lodging/110000000/109060000/109058700/109058620/06a05e16.jpg',
          preview: false,
        },
        {
          spotId: 4,
          url: 'https://media.vrbo.com/lodging/110000000/109060000/109058700/109058620/c2df1800.jpg',
          preview: false,
        },
        {
          spotId: 5,
          url: 'https://media.vrbo.com/lodging/112000000/111370000/111363000/111362957/1df64c8a.jpg',
          preview: true,
        },
        {
          spotId: 5,
          url: 'https://media.vrbo.com/lodging/112000000/111370000/111363000/111362957/05e883e8.jpg',
          preview: false,
        },
        {
          spotId: 5,
          url: 'https://media.vrbo.com/lodging/112000000/111370000/111363000/111362957/b8fcc826.jpg',
          preview: false,
        },
        {
          spotId: 5,
          url: 'https://media.vrbo.com/lodging/112000000/111370000/111363000/111362957/a890774d.jpg',
          preview: false,
        },
        {
          spotId: 5,
          url: 'https://media.vrbo.com/lodging/112000000/111370000/111363000/111362957/w1199h800x1y0-0cbff096.jpg',
          preview: false,
        },
        {
          spotId: 6,
          url: 'https://media.vrbo.com/lodging/112000000/111140000/111134800/111134749/4f609045.jpg',
          preview: true,
        },
        {
          spotId: 6,
          url: 'https://media.vrbo.com/lodging/112000000/111140000/111134800/111134749/a73edbff.jpg',
          preview: false,
        },
        {
          spotId: 6,
          url: 'https://media.vrbo.com/lodging/112000000/111140000/111134800/111134749/06643943.jpg',
          preview: false,
        },
        {
          spotId: 6,
          url: 'https://media.vrbo.com/lodging/112000000/111140000/111134800/111134749/d51c0765.jpg',
          preview: false,
        },
        {
          spotId: 6,
          url: 'https://media.vrbo.com/lodging/112000000/111140000/111134800/111134749/9ac13cce.jpg',
          preview: false,
        },
        {
          spotId: 7,
          url: 'https://media.vrbo.com/lodging/47000000/46280000/46272900/46272841/9edb4b7c.jpg',
          preview: true,
        },
        {
          spotId: 7,
          url: 'https://media.vrbo.com/lodging/47000000/46280000/46272900/46272841/9356dba3.jpg',
          preview: false,
        },
        {
          spotId: 7,
          url: 'https://media.vrbo.com/lodging/47000000/46280000/46272900/46272841/0b101366.jpg',
          preview: false,
        },
        {
          spotId: 7,
          url: 'https://media.vrbo.com/lodging/47000000/46280000/46272900/46272841/45c829c6.jpg',
          preview: false,
        },
        {
          spotId: 7,
          url: 'https://media.vrbo.com/lodging/47000000/46280000/46272900/46272841/6f276034.jpg',
          preview: false,
        },
        {
          spotId: 8,
          url: 'https://media.vrbo.com/lodging/108000000/107040000/107039000/107038978/6e4734c6.jpg',
          preview: true,
        },
        {
          spotId: 8,
          url: 'https://media.vrbo.com/lodging/108000000/107040000/107039000/107038978/026d53fd.jpg',
          preview: false,
        },
        {
          spotId: 8,
          url: 'https://media.vrbo.com/lodging/108000000/107040000/107039000/107038978/fe720d05.jpg',
          preview: false,
        },
        {
          spotId: 8,
          url: 'https://media.vrbo.com/lodging/108000000/107040000/107039000/107038978/26022261.jpg',
          preview: false,
        },
        {
          spotId: 8,
          url: 'https://media.vrbo.com/lodging/108000000/107040000/107039000/107038978/c7a7c542.jpg',
          preview: false,
        },
        {
          spotId: 9,
          url: 'https://media.vrbo.com/lodging/50000000/49170000/49168200/49168194/67d90e6d.jpg',
          preview: true,
        },
        {
          spotId: 9,
          url: 'https://media.vrbo.com/lodging/50000000/49170000/49168200/49168194/52bba02d.jpg',
          preview: false,
        },
        {
          spotId: 9,
          url: 'https://media.vrbo.com/lodging/50000000/49170000/49168200/49168194/26061aab.jpg',
          preview: false,
        },
        {
          spotId: 9,
          url: 'https://media.vrbo.com/lodging/50000000/49170000/49168200/49168194/03d1d391.jpg',
          preview: false,
        },
        {
          spotId: 9,
          url: 'https://media.vrbo.com/lodging/50000000/49170000/49168200/49168194/773d7927.jpg',
          preview: false,
        },
        {
          spotId: 10,
          url: 'https://media.vrbo.com/lodging/35000000/34090000/34089500/34089490/5a1ac44d.jpg',
          preview: true,
        },
        {
          spotId: 10,
          url: 'https://media.vrbo.com/lodging/35000000/34090000/34089500/34089490/199e1f7d.jpg',
          preview: false,
        },
        {
          spotId: 10,
          url: 'https://media.vrbo.com/lodging/35000000/34090000/34089500/34089490/a0e27346.jpg',
          preview: false,
        },
        {
          spotId: 10,
          url: 'https://media.vrbo.com/lodging/35000000/34090000/34089500/34089490/da128228.jpg',
          preview: false,
        },
        {
          spotId: 10,
          url: 'https://media.vrbo.com/lodging/35000000/34090000/34089500/34089490/2b39ff8d.jpg',
          preview: false,
        },
        {
          spotId: 11,
          url: 'https://media.vrbo.com/lodging/46000000/45610000/45605400/45605380/65e3ffd8.jpg',
          preview: true,
        },
        {
          spotId: 11,
          url: 'https://media.vrbo.com/lodging/46000000/45610000/45605400/45605380/cff4de0a.jpg',
          preview: false,
        },
        {
          spotId: 11,
          url: 'https://media.vrbo.com/lodging/46000000/45610000/45605400/45605380/a169085c.jpg',
          preview: false,
        },
        {
          spotId: 11,
          url: 'https://media.vrbo.com/lodging/46000000/45610000/45605400/45605380/9520f8e2.jpg',
          preview: false,
        },
        {
          spotId: 11,
          url: 'https://media.vrbo.com/lodging/46000000/45610000/45605400/45605380/25e7a52d.jpg',
          preview: false,
        },
        {
          spotId: 12,
          url: 'https://media.vrbo.com/lodging/113000000/112590000/112589900/112589888/0b116eca.jpg',
          preview: true,
        },
        {
          spotId: 12,
          url: 'https://media.vrbo.com/lodging/113000000/112590000/112589900/112589888/0c86a4ee.jpg',
          preview: false,
        },
        {
          spotId: 12,
          url: 'https://media.vrbo.com/lodging/113000000/112590000/112589900/112589888/4d7054bc.jpg',
          preview: false,
        },
        {
          spotId: 12,
          url: 'https://media.vrbo.com/lodging/113000000/112590000/112589900/112589888/4da794d8.jpg',
          preview: false,
        },
        {
          spotId: 12,
          url: 'https://media.vrbo.com/lodging/113000000/112590000/112589900/112589888/63ef42d5.jpg',
          preview: false,
        },
      ],
      { validate: true }
    );
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'SpotImages';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        spotId: {
          [Op.in]: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        },
      },
      {}
    );
  },
};
