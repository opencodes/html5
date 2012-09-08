var linechart =  { total :200,
                    items: [{"status": "AUTHORIZED","count": 8}, {"status": "closed","count": 45}, 
                  {"status": "complete","count": 10}, 
                  {"status": "DELIVERED","count": 10}, 
                  {"status": "FAILED","count": 12}, 
                  {"status": "HANDED_OVER_TO_INVENTORY","count": 20}, 
                  {"status": "INVOICED","count": 21}, 
                  {"status": "MIGRATED","count": 10}, 
                  {"status": "ON_HOLD","count": 11}, 
                  {"status": "OPF_PRINTED","count": 10}, 
                  {"status": "PAYMENT_REVIEW","count": 7}, 
                  {"status": "PENDING","count": 3}, 
                  {"status": "PEND_CANCEL","count": 3}, 
                  {"status": "PROCESS_CANCEL","count": 3}, 
                  {"status": "RTO_RECEIVED","count": 12}, 
                  {"status": "SHIPMENT_CREATED","count": 9}, 
                  {"status": "SHIPPED","count": 6}]};

 var canvas = document.getElementById('canvas');
 var ctx = canvas.getContext("2d");
 var maxwidth  = '960';
 var maxheight ='600';


cnv.barchart(ctx, maxwidth, maxheight, 100, linechart);







