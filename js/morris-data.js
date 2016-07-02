$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2016 Q1',
            Pipeline1: 35,
            Pipeline2: 45,
            Pipeline3: 45
        }, {
            period: '2015 Q2',
            Pipeline1: 36,
            Pipeline2: 47,
            Pipeline3: 59
        }, {
            period: '2015 Q3',
            Pipeline1: 21,
            Pipeline2: 34,
            Pipeline3: 56
        }, {
            period: '2015 Q4',
            Pipeline1: 12,
            Pipeline2: 43,
            Pipeline3: 56
        }, {
            period: '2014 Q1',
            Pipeline1: 21,
            Pipeline2: 45,
            Pipeline3: 54
        }, {
            period: '2014 Q2',
            Pipeline1: 34,
            Pipeline2: 45,
            Pipeline3: 45
        }, {
            period: '2014 Q3',
            Pipeline1: 23,
            Pipeline2: 45,
            Pipeline3: 73
        }, {
            period: '2014 Q4',
            Pipeline1: 12,
            Pipeline2: 34,
            Pipeline3: 56
        }, {
            period: '2013 Q1',
            Pipeline1: 21,
            Pipeline2: 56,
            Pipeline3: 32
        }, {
            period: '2013 Q2',
            Pipeline1: 21,
            Pipeline2: 34,
            Pipeline3: 56
        }],
        xkey: 'period',
        ykeys: ['Pipeline1', 'Pipeline2', 'Pipeline3'],
        labels: ['Pipeline1', 'Pipeline2', 'Pipeline3'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });
    Morris.Area({
        element: 'morris-area-chartTemp',
        data: [{
            period: '2010 Q1',
            temperature: 26
        }, {
            period: '2010 Q2',
            temperature: 25
        }, {
            period: '2010 Q3',
            temperature: 22
        }, {
            period: '2010 Q4',
            temperature: 24
        }, {
            period: '2011 Q1',
            temperature: 27
        }, {
            period: '2011 Q2',
            temperature: 34
        }, {
            period: '2011 Q3',
            temperature: 37
        }, {
            period: '2011 Q4',
            temperature: 38
        }, {
            period: '2012 Q1',
            temperature: 24
        }, {
            period: '2012 Q2',
            temperature: 25
        }],
        xkey: 'period',
        ykeys: ['temperature'],
        labels: ['Température'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Area({
        element: 'morris-area-chartQual',
        data: [{
            period: '2010 Q1',
            Purete: 85
        }, {
            period: '2010 Q2',
            Purete: 82
        }, {
            period: '2010 Q3',
            Purete: 80
        }, {
            period: '2010 Q4',
            Purete: 89
        }, {
            period: '2011 Q1',
            Purete: 78
        }, {
            period: '2011 Q2',
            Purete: 75
        }, {
            period: '2011 Q3',
            Purete: 77
        }, {
            period: '2011 Q4',
            Purete: 86
        }, {
            period: '2012 Q1',
            Purete: 89
        }, {
            period: '2012 Q2',
            Purete: 81
        }],
        xkey: 'period',
        ykeys: ['Purete'],
        labels: ['Pureté du mélange'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Area({
        element: 'morris-area-chartHygro',
        data: [{
            period: '2010 Q1',
            Hygrometrie: 35
        }, {
            period: '2010 Q2',
            Hygrometrie: 40
        }, {
            period: '2010 Q3',
            Hygrometrie: 42
        }, {
            period: '2010 Q4',
            Hygrometrie: 38
        }, {
            period: '2011 Q1',
            Hygrometrie: 47
        }, {
            period: '2011 Q2',
            Hygrometrie: 40
        }, {
            period: '2011 Q3',
            Hygrometrie: 32
        }, {
            period: '2011 Q4',
            Hygrometrie: 28
        }, {
            period: '2012 Q1',
            Hygrometrie: 31
        }, {
            period: '2012 Q2',
            Hygrometrie: 37
        }],
        xkey: 'period',
        ykeys: ['Hygrometrie'],
        labels: ['Hygrométrie'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });



    Morris.Area({
        element: 'morris-area-chart-3',
        data: [{
            period: '2016 Q1',
            Pipeline1: 35,
            Pipeline2: 45,
            Pipeline3: 45
        }, {
            period: '2015 Q2',
            Pipeline1: 36,
            Pipeline2: 47,
            Pipeline3: 59
        }, {
            period: '2015 Q3',
            Pipeline1: 21,
            Pipeline2: 34,
            Pipeline3: 56
        }, {
            period: '2015 Q4',
            Pipeline1: 12,
            Pipeline2: 43,
            Pipeline3: 56
        }, {
            period: '2014 Q1',
            Pipeline1: 21,
            Pipeline2: 45,
            Pipeline3: 54
        }, {
            period: '2014 Q2',
            Pipeline1: 34,
            Pipeline2: 45,
            Pipeline3: 45
        }, {
            period: '2014 Q3',
            Pipeline1: 23,
            Pipeline2: 45,
            Pipeline3: 73
        }, {
            period: '2014 Q4',
            Pipeline1: 12,
            Pipeline2: 34,
            Pipeline3: 56
        }, {
            period: '2013 Q1',
            Pipeline1: 21,
            Pipeline2: 56,
            Pipeline3: 32
        }, {
            period: '2013 Q2',
            Pipeline1: 21,
            Pipeline2: 34,
            Pipeline3: 56
        }],
        xkey: 'period',
        ykeys: ['Pipeline1', 'Pipeline2', 'Pipeline3'],
        labels: ['Pipeline1', 'Pipeline2', 'Pipeline3'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart-2',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });


});
