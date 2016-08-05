var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
    title: { type: String, required: '{PATH} is required!' },
    featured: { type: Boolean, required: '{PATH} is required!' },
    published: { type: Date, required: '{PATH} is required!' },
    tags: [String]
});

var Course = mongoose.model('Course', courseSchema);

function createDefaultCourses() {
    Course.find({}).exec(function (err, collection) {
        if (collection.length === 0) {
            Course.create({ title: 'C# functions', featured: true, published: new Date('10/10/2013'), tags: ['C#'] });
            Course.create({ title: 'Node.js', featured: true, published: new Date('10/10/2013'), tags: ['MEAN', 'Open Source'] });
            Course.create({ title: 'Angular', featured: true, published: new Date('11/11/2013'), tags: ['JavaScript'] });
            Course.create({ title: 'Mongodb', featured: true, published: new Date('12/1/2013'), tags: ['NoSql'] });
            Course.create({ title: 'Express', featured: true, published: new Date('13/9/2013'), tags: ['Javascript library'] });
        }
    })
}

exports.createDefaultCourses = createDefaultCourses;