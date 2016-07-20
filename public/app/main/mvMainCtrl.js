angular.module('app').controller('mvMainCtrl', function ($scope) {
    $scope.courses = [
        {name:'C# for Sociopaths', featured: true, published: new Date('3/6/2014')},
        {name:'JavaScript Best Practics', featured: true, published: new Date('5/3/2016')},
        {name:'AngularJs End to End', featured: false, published: new Date('4/9/2015')},
        {name:'Apps With MEAN Stack', featured: true, published: new Date('3/6/2017')},
        {name:'WebApi InDepth', featured: false, published: new Date('7/6/2013')},
        {name:'.Net framework expertise', featured: false, published: new Date('6/1/2015')},
        {name:'Developer to architect', featured: true, published: new Date('1/5/2016')},
        {name:'C# best practives and OOPS', featured: false, published: new Date('6/1/2011')},
        {name:'Lean Nodejs just 24 hours', featured: true, published: new Date('1/5/2018')},
        {name:'SQL server administration', featured: false, published: new Date('1/2/2016')},
        {name:'SharePoint 2013 for developer and administrator', featured: true, published: new Date('1/1/2016')}
    ]
});