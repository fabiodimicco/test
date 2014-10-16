require(["sap/viz/lang/langManager"],function(l){l.register({id:'ru',value:{IDS_DEFAULTMND:"\u0412\u0441\u0435 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0438",IDS_DEFAULTCHARTTITLE:"\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u044B",IDS_ISNOVALUE:"\u041D\u0435\u0442 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F",IDS_BARCHART:"\u0413\u0438\u0441\u0442\u043E\u0433\u0440\u0430\u043C\u043C\u0430",IDS_COMBINATIONCHART:"\u041A\u043E\u043C\u0431\u0438\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0441\u0442\u043E\u043B\u0431\u0447\u0430\u0442\u0430\u044F \u0438 \u043B\u0438\u043D\u0435\u0439\u043D\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430",IDS_DUALBARCHART:"\u0413\u0438\u0441\u0442\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u0441 \u0434\u0432\u0443\u043C\u044F \u043E\u0441\u044F\u043C\u0438 X",IDS_DUALCOMBINATIONCHART:"\u041A\u043E\u043C\u0431\u0438\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0441\u0442\u043E\u043B\u0431\u0447\u0430\u0442\u0430\u044F \u0438 \u043B\u0438\u043D\u0435\u0439\u043D\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430 \u0441 \u0434\u0432\u0443\u043C\u044F \u043E\u0441\u044F\u043C\u0438 Y",IDS_DUALHORIZONTALCOMBINATIONCHART:"\u041A\u043E\u043C\u0431\u0438\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u043B\u0438\u043D\u0435\u0439\u043D\u0430\u044F \u0433\u0438\u0441\u0442\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u0441 \u0434\u0432\u0443\u043C\u044F \u043E\u0441\u044F\u043C\u0438 X",IDS_DUALHORIZONTALLINECHART:"\u0413\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u0430\u044F \u043B\u0438\u043D\u0435\u0439\u043D\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430 \u0441 \u0434\u0432\u0443\u043C\u044F \u043E\u0441\u044F\u043C\u0438 X",IDS_DIUALLINECHART:"\u041B\u0438\u043D\u0435\u0439\u043D\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430 \u0441 \u0434\u0432\u0443\u043C\u044F \u043E\u0441\u044F\u043C\u0438 Y",IDS_DUALPERCENTAGESTACKEDBARCHART:"\u041D\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0441\u043E\u0441\u0442\u0430\u0432\u043D\u0430\u044F \u0433\u0438\u0441\u0442\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u0441 \u0434\u0432\u0443\u043C\u044F \u043E\u0441\u044F\u043C\u0438 X",IDS_DUALSTACKEDVERTICALBARCHART:"\u0421\u043E\u0441\u0442\u0430\u0432\u043D\u0430\u044F \u0441\u0442\u043E\u043B\u0431\u0447\u0430\u0442\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430 \u0441 \u0434\u0432\u0443\u043C\u044F \u043E\u0441\u044F\u043C\u0438 Y",IDS_DUALPERCENTAGESTACKEDVERTICALBARCHART:"\u041D\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0441\u043E\u0441\u0442\u0430\u0432\u043D\u0430\u044F \u0441\u0442\u043E\u043B\u0431\u0447\u0430\u0442\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430 \u0441 \u0434\u0432\u0443\u043C\u044F \u043E\u0441\u044F\u043C\u0438 Y",IDS_DUALSTACKEDBARCHART:"\u0421\u043E\u0441\u0442\u0430\u0432\u043D\u0430\u044F \u0433\u0438\u0441\u0442\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u0441 \u0434\u0432\u0443\u043C\u044F \u043E\u0441\u044F\u043C\u0438 X",IDS_DUALVERTICALBARCHART:"\u0421\u0442\u043E\u043B\u0431\u0447\u0430\u0442\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430 \u0441 \u0434\u0432\u0443\u043C\u044F \u043E\u0441\u044F\u043C\u0438 Y",IDS_HORIZONTALBOXPLOTCHART:"\u0413\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u0430\u044F \u043A\u043E\u0440\u043E\u0431\u0447\u0430\u0442\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430",IDS_HORIZONTALCOMBINATIONCHART:"\u041A\u043E\u043C\u0431\u0438\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u043B\u0438\u043D\u0435\u0439\u043D\u0430\u044F \u0433\u0438\u0441\u0442\u043E\u0433\u0440\u0430\u043C\u043C\u0430",IDS_HORIZONTALLINECHART:"\u0413\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u0430\u044F \u043B\u0438\u043D\u0435\u0439\u043D\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430",IDS_HORIZONTALWATERFALLCHART:"\u0413\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u0430\u044F \u043A\u0430\u0441\u043A\u0430\u0434\u043D\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430",IDS_HORIZONTALSTACKEDWATERFALL:"\u0413\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u043E\u0441\u0442\u0430\u0432\u043D\u0430\u044F \u043A\u0430\u0441\u043A\u0430\u0434\u043D\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430",IDS_LINECHART:"\u041B\u0438\u043D\u0435\u0439\u043D\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430",IDS_PERCENTAGESTACKEDBARCHART:"\u041D\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0441\u043E\u0441\u0442\u0430\u0432\u043D\u0430\u044F \u0433\u0438\u0441\u0442\u043E\u0433\u0440\u0430\u043C\u043C\u0430",IDS_PERCENTAGESTACKEDVERTICALBARCHART:"\u041D\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0441\u043E\u0441\u0442\u0430\u0432\u043D\u0430\u044F \u0441\u0442\u043E\u043B\u0431\u0447\u0430\u0442\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430",IDS_SPARKLINECHART:"\u0418\u0441\u043A\u0440\u043E\u0433\u0440\u0430\u0444\u0438\u043A (\u044D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F)",IDS_STACKEDBARCHART:"\u0421\u043E\u0441\u0442\u0430\u0432\u043D\u0430\u044F \u0433\u0438\u0441\u0442\u043E\u0433\u0440\u0430\u043C\u043C\u0430",IDS_STACKEDVERTICALBARCHART:"\u0421\u043E\u0441\u0442\u0430\u0432\u043D\u0430\u044F \u0441\u0442\u043E\u043B\u0431\u0447\u0430\u0442\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430",IDS_STACKEDWATERFALLCHART:"\u0421\u043E\u0441\u0442\u0430\u0432\u043D\u0430\u044F \u043A\u0430\u0441\u043A\u0430\u0434\u043D\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430",IDS_VARIANTBARCHART:"\u0413\u0438\u0441\u0442\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432 (\u044D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F)",IDS_VERTICALBARCHART:"\u0421\u0442\u043E\u043B\u0431\u0447\u0430\u0442\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430",IDS_VERTICALBOXPLOTCHART:"\u041A\u043E\u0440\u043E\u0431\u0447\u0430\u0442\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430",IDS_WATERFALLCHART:"\u041A\u0430\u0441\u043A\u0430\u0434\u043D\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430",IDS_DONUTCHART:"\u041A\u043E\u043B\u044C\u0446\u0435\u0432\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430",IDS_PIECHART:"\u041A\u0440\u0443\u0433\u043E\u0432\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430",IDS_BASEBUBBLECHART:"\u0411\u0430\u0437\u043E\u0432\u0430\u044F \u0442\u043E\u0447\u0435\u0447\u043D\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430",IDS_BUBBLECHART:"\u041F\u0443\u0437\u044B\u0440\u044C\u043A\u043E\u0432\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430",IDS_SCATTERCHART:"\u0422\u043E\u0447\u0435\u0447\u043D\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430",IDS_BASECHART:"\u0411\u0430\u0437\u043E\u0432\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430",IDS_BASEHORIZONTALCHART:"\u0411\u0430\u0437\u043E\u0432\u0430\u044F \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u0430\u044F XY-\u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430",IDS_BASEVERTICALCHART:"\u0411\u0430\u0437\u043E\u0432\u0430\u044F \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u0430\u044F XY-\u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430",IDS_BASEMULTIPLECHART:"\u0411\u0430\u0437\u043E\u0432\u0430\u044F \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430",IDS_BASEMULTIPLEXYCHART:"\u0411\u0430\u0437\u043E\u0432\u0430\u044F \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F XY-\u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430",IDS_BASESINGLECHART:"\u0411\u0430\u0437\u043E\u0432\u0430\u044F \u0435\u0434\u0438\u043D\u0438\u0447\u043D\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430",IDS_HEATMAPCHART:"\u0422\u0435\u043F\u043B\u043E\u0432\u0430\u044F \u043A\u0430\u0440\u0442\u0430",IDS_TREEMAPCHART:"\u0414\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430 \u0434\u0440\u0435\u0432\u043E\u0432\u0438\u0434\u043D\u043E\u0439 \u043A\u0430\u0440\u0442\u044B",IDS_MULTIBARCHART:"\u041C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u0433\u0438\u0441\u0442\u043E\u0433\u0440\u0430\u043C\u043C\u0430",IDS_MULTIBUBBLECHART:"\u041C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u043F\u0443\u0437\u044B\u0440\u044C\u043A\u043E\u0432\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430",IDS_MULTIDONUTCHART:"\u041C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u043A\u043E\u043B\u044C\u0446\u0435\u0432\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430",IDS_MULTIDUALBARCHART:"\u041C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u0433\u0438\u0441\u0442\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u0441 \u0434\u0432\u0443\u043C\u044F \u043E\u0441\u044F\u043C\u0438 X",IDS_MULTIDUALHORIZONTALLINECHART:"\u041C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u0430\u044F \u043B\u0438\u043D\u0435\u0439\u043D\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430 \u0441 \u0434\u0432\u0443\u043C\u044F \u043E\u0441\u044F\u043C\u0438 X",IDS_MULTIDUALLINECHART:"\u041C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u043B\u0438\u043D\u0435\u0439\u043D\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430 \u0441 \u0434\u0432\u0443\u043C\u044F \u043E\u0441\u044F\u043C\u0438 Y",IDS_MULTIDUALPERCENTAGESTACKEDBARCHART:"\u041C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u043D\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0441\u043E\u0441\u0442\u0430\u0432\u043D\u0430\u044F \u0433\u0438\u0441\u0442\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u0441 \u0434\u0432\u0443\u043C\u044F \u043E\u0441\u044F\u043C\u0438 X",IDS_MULTIDUALPERCENTAGESTACKEDVERTICALBARCHART:"\u041C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u043D\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0441\u043E\u0441\u0442\u0430\u0432\u043D\u0430\u044F \u0441\u0442\u043E\u043B\u0431\u0447\u0430\u0442\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430 \u0441 \u0434\u0432\u0443\u043C\u044F \u043E\u0441\u044F\u043C\u0438 Y",IDS_MULTIDUALSTACKEDBARCHART:"\u041C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u0441\u043E\u0441\u0442\u0430\u0432\u043D\u0430\u044F \u0433\u0438\u0441\u0442\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u0441 \u0434\u0432\u0443\u043C\u044F \u043E\u0441\u044F\u043C\u0438 X",IDS_MULTIDUALSTACKEDVERTICALBARCHART:"\u041C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u0441\u043E\u0441\u0442\u0430\u0432\u043D\u0430\u044F \u0441\u0442\u043E\u043B\u0431\u0447\u0430\u0442\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430 \u0441 \u0434\u0432\u0443\u043C\u044F \u043E\u0441\u044F\u043C\u0438 Y",IDS_MULTIDUALVERTICALBARCHART:"\u041C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u0441\u0442\u043E\u043B\u0431\u0447\u0430\u0442\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430 \u0441 \u0434\u0432\u0443\u043C\u044F \u043E\u0441\u044F\u043C\u0438 Y",IDS_MULTIHORIZONTALLINECHART:"\u041C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u0430\u044F \u043B\u0438\u043D\u0435\u0439\u043D\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430",IDS_MULTILINECHART:"\u041C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u043B\u0438\u043D\u0435\u0439\u043D\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430",IDS_MULTIPERCENTAGESTACKEDBARCHART:"\u041C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u043D\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0441\u043E\u0441\u0442\u0430\u0432\u043D\u0430\u044F \u0433\u0438\u0441\u0442\u043E\u0433\u0440\u0430\u043C\u043C\u0430",IDS_MULTIPERCENTAGESTACKEDVERTICALBARCHART:"\u041C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u043D\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0441\u043E\u0441\u0442\u0430\u0432\u043D\u0430\u044F \u0441\u0442\u043E\u043B\u0431\u0447\u0430\u0442\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430",IDS_MULTIPIECHART:"\u041C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u043A\u0440\u0443\u0433\u043E\u0432\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430",IDS_MULTISCATTERCHART:"\u041C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u0442\u043E\u0447\u0435\u0447\u043D\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430",IDS_MULTISTACKEDBARCHART:"\u041C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u0441\u043E\u0441\u0442\u0430\u0432\u043D\u0430\u044F \u0433\u0438\u0441\u0442\u043E\u0433\u0440\u0430\u043C\u043C\u0430",IDS_MULTISTACKEDVERTICALBARCHART:"\u041C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u0441\u043E\u0441\u0442\u0430\u0432\u043D\u0430\u044F \u0441\u0442\u043E\u043B\u0431\u0447\u0430\u0442\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430",IDS_MULTIVERTICALBARCHART:"\u041C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u0441\u0442\u043E\u043B\u0431\u0447\u0430\u0442\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430",IDS_MULTIRADARCHART:"\u041C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u043B\u0435\u043F\u0435\u0441\u0442\u043A\u043E\u0432\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430",IDS_RADARCHART:"\u041B\u0435\u043F\u0435\u0441\u0442\u043A\u043E\u0432\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430",IDS_SCATTERMATRIXCHART:"\u0422\u043E\u0447\u0435\u0447\u043D\u0430\u044F \u043C\u0430\u0442\u0440\u0438\u0447\u043D\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430",IDS_TAGCLOUDCHART:"\u041E\u0431\u043B\u0430\u043A\u043E \u0442\u0435\u0433\u043E\u0432",IDS_MEKKOCHART:"\u0414\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430 \u041C\u0435\u043A\u043A\u043E",IDS_HORIZONTALMEKKOCHART:"\u0413\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430 \u041C\u0435\u043A\u043A\u043E",IDS_PERCENTAGEMEKKOCHART:"\u041D\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430 \u041C\u0435\u043A\u043A\u043E",IDS_PERCENTAGEHORIZONTALMEKKOCHART:"\u041D\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430 \u041C\u0435\u043A\u043A\u043E",IDS_AREACHART:"\u0417\u043E\u043D\u043D\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430",IDS_PERCENTAGEAREACHART:"\u041D\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0437\u043E\u043D\u043D\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430",IDS_HORIZONTALAREACHART:"\u0413\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u0430\u044F \u0437\u043E\u043D\u043D\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430",IDS_PERCENTAGEHORIZONTALAREACHART:"\u041D\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u0430\u044F \u0437\u043E\u043D\u043D\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430",IDS_MULTIAREACHART:"\u041C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u0437\u043E\u043D\u043D\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430",IDS_MULTIHORIZONTALAREACHART:"\u041C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u0430\u044F \u0437\u043E\u043D\u043D\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430",IDS_MULTIPERCENTAGEAREACHART:"\u041C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u043D\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0437\u043E\u043D\u043D\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430",IDS_MULTIPERCENTAGEHORIZONTALAREACHART:"\u041C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u043D\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u0430\u044F \u0437\u043E\u043D\u043D\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430",IDS_3D_BAR:"\u0422\u0440\u0435\u0445\u043C\u0435\u0440\u043D\u0430\u044F \u0433\u0438\u0441\u0442\u043E\u0433\u0440\u0430\u043C\u043C\u0430",IDS_3D_COLUMN:"\u0422\u0440\u0435\u0445\u043C\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u043E\u043B\u0431\u0447\u0430\u0442\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430",IDS_PIEWITHDEPTHCHART:"\u041A\u0440\u0443\u0433\u043E\u0432\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430 \u0441 \u0433\u043B\u0443\u0431\u0438\u043D\u043E\u0439",IDS_DONUTWITHDEPTHCHART:"\u041A\u043E\u043B\u044C\u0446\u0435\u0432\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430 \u0441 \u0433\u043B\u0443\u0431\u0438\u043D\u043E\u0439",IDS_MULTIPIEWITHDEPTHCHART:"Multiple Pie With Depth Chart",IDS_MULTIDONUTWITHDEPTHCHART:"Multiple Donut With Depth Chart",IDS_REGIONCOLOR:"\u0426\u0432\u0435\u0442 \u0440\u0435\u0433\u0438\u043E\u043D\u0430",IDS_PRIMARYVALUES:"\u041F\u0435\u0440\u0432\u0438\u0447\u043D\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F",IDS_SECONDARYVALUES:"\u0412\u0442\u043E\u0440\u0438\u0447\u043D\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F",IDS_AXISLABELS:"\u041C\u0435\u0442\u043A\u0438 \u043E\u0441\u0435\u0439",IDS_RECTANGLETITLE:"\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A\u0430",IDS_RECTANGLEWEIGHT:"\u0412\u0435\u0441 \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A\u0430",IDS_RECTANGLECOLOR:"\u0426\u0432\u0435\u0442 \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A\u0430",IDS_TAGNAME:"Tags Name",IDS_TAGWEIGHT:"\u0412\u0435\u0441 \u0442\u0435\u0433\u043E\u0432",IDS_TAGFAMILY:"\u0421\u0435\u043C\u0435\u0439\u0441\u0442\u0432\u043E \u0442\u0435\u0433\u043E\u0432",IDS_CATEGORYAXIS:"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u043C\u0435\u0442\u043E\u043A \u043E\u0441\u0435\u0439",IDS_REGIONSHAPE:"\u0424\u043E\u0440\u043C\u0430 \u0440\u0435\u0433\u0438\u043E\u043D\u0430",IDS_BUBBLEWIDTH:"\u0428\u0438\u0440\u0438\u043D\u0430 \u043F\u0443\u0437\u044B\u0440\u044C\u043A\u0430",IDS_BUBBLEHEIGHT:"\u0412\u044B\u0441\u043E\u0442\u0430 \u043F\u0443\u0437\u044B\u0440\u044C\u043A\u0430",IDS_RADARAXES:"\u041E\u0441\u0438 \u043B\u0435\u043F\u0435\u0441\u0442\u043A\u043E\u0432\u043E\u0439 \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u044B",IDS_RADARAXESVALUE:"\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043E\u0441\u0435\u0439 \u043B\u0435\u043F\u0435\u0441\u0442\u043A\u043E\u0432\u043E\u0439 \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u044B",IDS_PIESECTORCOLORNAME:"\u0426\u0432\u0435\u0442 \u0441\u0435\u043A\u0442\u043E\u0440\u0430",IDS_PIESECTORSIZE:"\u0420\u0430\u0437\u043C\u0435\u0440 \u0441\u0435\u043A\u0442\u043E\u0440\u0430",IDS_PIEDEPTHSIZE:"Depth Size",IDS_MAINLABELAXISNAME:"\u041E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u043E\u0441\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0439",IDS_SECONDARYAXISLABELNAME:"\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u043E\u0441\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0439",IDS_SELECTABILITY:"\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0432\u044B\u0431\u043E\u0440\u0430",IDS_PRIMARYVALUECOLORPALETTE:"primaryValuesColorPalette",IDS_SECONDARYVALUESCOLORPALETTE:"secondaryValuesColorPalette",IDS_DRAWINGEFFECT:"drawingEffect",IDS_TOOLTIPVISIBLE:"tooltipVisible",IDS_ENABLEROUNDCORNER:"enableRoundCorner",IDS_ANIMATION:"\u0430\u043D\u0438\u043C\u0430\u0446\u0438\u044F",IDS_DATALOADING:"dataLoading",IDS_DATAUPDATING:"dataUpdating",IDS_BAR:"\u0441\u0442\u043E\u043B\u0431\u0446\u044B",IDS_LINE:"\u043B\u0438\u043D\u0438\u0438",IDS_WIDTH:"\u0448\u0438\u0440\u0438\u043D\u0430",IDS_HOVERLINEVISIBLE:"hoverlineVisible",IDS_MARKER:"\u043C\u0435\u0442\u043A\u0430",IDS_VISIBLE:"\u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u044C",IDS_SHAPE:"\u0444\u043E\u0440\u043C\u0430",IDS_SIZE:"\u0440\u0430\u0437\u043C\u0435\u0440",IDS_HEADERVISIBLE:"headerVisible",IDS_AXISVISIBLE:"axisVisible",IDS_GRIDVISIBLE:"gridVisible",IDS_COLUMNSEQUENCE:"columnSequence",IDS_COLUMNCONFIG:"columnConfig",IDS_STARTCOLUMN:"startColumn",IDS_LABEL:"\u044F\u0440\u043B\u044B\u043A",IDS_VALUEFORMAT:"valueFormat",IDS_ENDCOLUMN:"endColumn",IDS_HIGHCOLUMN:"highColumn",IDS_LOWCOLUMN:"lowColumn",IDS_LINECONFIG:"lineConfig",IDS_MARKERS:"\u043C\u0435\u0442\u043A\u0438",IDS_FILLVISIBLE:"fillVisible",IDS_REFINEVISIBLE:"reflineVisible",IDS_MODE:"\u0440\u0435\u0436\u0438\u043C",IDS_TITLE:"\u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",IDS_TEXT:"\u0442\u0435\u043A\u0441\u0442",IDS_GRIDLINE:"\u043B\u0438\u043D\u0438\u044F \u0441\u0435\u0442\u043A\u0438",IDS_SHOWFIRSTLINE:"showFirstLine",IDS_TYPE:"\u0442\u0438\u043F",IDS_FORMAT:"\u0444\u043E\u0440\u043C\u0430\u0442",IDS_POSITION:"\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435",IDS_BORDER:"\u0433\u0440\u0430\u043D\u0438\u0446\u0430",IDS_STARTCOLOR:"startcolor",IDS_ENDCOLOR:"endcolor",}})});

