$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010 Q1',
            iphone: 2666,
            ipad: null,
            itouch: 2647
        }, {
            period: '2010 Q2',
            iphone: 2778,
            ipad: 2294,
            itouch: 2441
        }, {
            period: '2010 Q3',
            iphone: 4912,
            ipad: 1969,
            itouch: 2501
        }, {
            period: '2010 Q4',
            iphone: 3767,
            ipad: 3597,
            itouch: 5689
        }, {
            period: '2011 Q1',
            iphone: 6810,
            ipad: 1914,
            itouch: 2293
        }, {
            period: '2011 Q2',
            iphone: 5670,
            ipad: 4293,
            itouch: 1881
        }, {
            period: '2011 Q3',
            iphone: 4820,
            ipad: 3795,
            itouch: 1588
        }, {
            period: '2011 Q4',
            iphone: 15073,
            ipad: 5967,
            itouch: 5175
        }, {
            period: '2012 Q1',
            iphone: 10687,
            ipad: 4460,
            itouch: 2028
        }, {
            period: '2012 Q2',
            iphone: 8432,
            ipad: 5713,
            itouch: 1791
        }],
        xkey: 'period',
        ykeys: ['iphone', 'ipad', 'itouch'],
        labels: ['iPhone', 'iPad', 'iPod Touch'],
        pointSize: 2,
        hideHover: 'auto',
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


    Morris.Area({
        element: 'morris-area-chartTemp',
        data: [{
            period: '2010 Q1',
            temperature : 26
        }, {
            period: '2010 Q2',
            temperature : 25
        }, {
            period: '2010 Q3',
            temperature : 22
        }, {
            period: '2010 Q4',
            temperature : 24
        }, {
            period: '2011 Q1',
            temperature : 27
        }, {
            period: '2011 Q2',
            temperature : 34
        }, {
            period: '2011 Q3',
            temperature : 37
        }, {
            period: '2011 Q4',
            temperature : 38
        }, {
            period: '2012 Q1',
            temperature : 24
        }, {
            period: '2012 Q2',
            temperature : 25
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
            Purete : 85
        }, {
            period: '2010 Q2',
            Purete : 82
        }, {
            period: '2010 Q3',
            Purete : 80
        }, {
            period: '2010 Q4',
            Purete : 89
        }, {
            period: '2011 Q1',
            Purete : 78
        }, {
            period: '2011 Q2',
            Purete : 75
        }, {
            period: '2011 Q3',
            Purete : 77
        }, {
            period: '2011 Q4',
            Purete : 86
        }, {
            period: '2012 Q1',
            Purete : 89
        }, {
            period: '2012 Q2',
            Purete : 81
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
            Hygrometrie : 35
        }, {
            period: '2010 Q2',
            Hygrometrie : 40
        }, {
            period: '2010 Q3',
            Hygrometrie : 42
        }, {
            period: '2010 Q4',
            Hygrometrie : 38
        }, {
            period: '2011 Q1',
            Hygrometrie : 47
        }, {
            period: '2011 Q2',
            Hygrometrie : 40
        }, {
            period: '2011 Q3',
            Hygrometrie : 32
        }, {
            period: '2011 Q4',
            Hygrometrie : 28
        }, {
            period: '2012 Q1',
            Hygrometrie : 31
        }, {
            period: '2012 Q2',
            Hygrometrie : 37
        }],
        xkey: 'period',
        ykeys: ['Hygrometrie'],
        labels: ['Hygrométrie'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

});
