$(document)
    .ready(function() {

        //Hush
        /*jQuery.event.special.touchstart = {
            setup: function( _, ns, handle ) {
                this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault") });
            }
        };
        jQuery.event.special.touchmove = {
            setup: function( _, ns, handle ) {
                this.addEventListener("touchmove", handle, { passive: !ns.includes("noPreventDefault") });
            }
        };
        jQuery.event.special.wheel = {
            setup: function( _, ns, handle ){
                this.addEventListener("wheel", handle, { passive: true });
            }
        };
        jQuery.event.special.mousewheel = {
            setup: function( _, ns, handle ){
                this.addEventListener("mousewheel", handle, { passive: true });
            }
        };
        window.alert = function() {};*/

        //merge these into the csv to html version     
        
        var exampleTable8 = $('#example8')
            .DataTable({
                /*data: jsObj7,*/
                "ajax": 'https://jeffscoolusername.github.io/testfolder/test2/ajax/data/arrays2.txt',
                //data: data88888,
                //data: data,
                stateSave: true,
                dom: 'Bfrtip',
                initComplete: function () {
                    // Apply the search
                    this.api().columns().every( function () {
                        var that = this;
        
                        $( 'input', this.footer() ).on( 'keyup change clear', function () {
                            if ( that.search() !== this.value ) {
                                that
                                    .search( this.value )
                                    .draw();
                            }
                        } );
                    } );
                },
                buttons: [
                {
                    extend: "copy",
                    exportOptions: {
                    modifier: { search: 'none', selected: true}
                    }
                },
                {
                    extend: "csv",
                    exportOptions: {
                    modifier: { search: 'none', selected: true}
                    }
                },
                {
                    extend: "excel",
                    exportOptions: {
                    modifier: { search: 'none', selected: true}
                    }
                },
                {
                    extend: "pdfHtml5",
                    exportOptions: {
                    modifier: { search: 'none', selected: true}
                    }
                },
                {
                    extend: "print",
                    exportOptions: {
                    modifier: { search: 'none', selected: true}
                    }
                }, 
                {
                    extend: 'colvis',
                    text: 'Columns'
                },
                {
                    text: 'Select All',
                    action: function () {
                        exampleTable8.rows().select();
                    }
                },
                {
                    text: 'Select None',
                    action: function () {
                        exampleTable8.rows().deselect();
                    }
                },
                {
                    text: 'Hide Unselected',
                    action: function ( e, dt, button, config ) {
                        dt.rows({ selected: false }).nodes().to$().css({"display":"none"});
                    }
                },
                {
                    text: 'Clear/Reset',
                    action: function ( e, dt, button, config ) {
                        // Reset Column filtering
                        $('#example8 tfoot input').val('').change();
                        
                        // Reset column order
                        dt.colReorder.reset();

                        // Redraw table (and reset main search filter)
                        dt.search('').draw();

                        dt.rows().deselect();
                        dt.rows({ selected: false }).nodes().to$().css({"display":"table-row"});
                    }
                }
                ],
                "language": {
                    "info": "Initial Rows : _TOTAL_",
                    select: {
                                rows: {
                                    _: "",
                                    0: "",
                                    1: ""
                                }
                            }
                    },
                colReorder: true,
                "order": [[ 0, "asc" ]],
                paging: false,
                select: {
                    style: 'multi'
                }, 
                "columnDefs": [
                    {
                        "targets": [1],
                        "render": function ( data, type, row, meta ) {
                            //var linkedIn = row[0];                   
                            //return '<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/' + itemID + '">' + itemID + '</a>';
                            if (data === "TBD")
                            {return data;}
                            else
                            {return '<a target="_blank" rel="noopener noreferrer" href="https://algoexplorer.io/asset/' + data + '">' + data + '</a>';}
                        }
                    },
                    {
                        "targets": [4, 5, 6, 7],
                        "render": function ( data, type, row, meta ) {
                            if (data === "TBD")
                            {return data;}
                            else
                            {return '<a target="_blank" rel="noopener noreferrer" href="' + data + '">' + 'Yes' + '</a>';}
                        }
                    }
            
                ],
                rowReorder: true
                })
            
            ;    

        var exampleTable9 = $('#example9')
            .DataTable({
                "ajax": 'https://jeffscoolusername.github.io/testfolder/test2/ajax/data/asateams.txt',
                stateSave: true,
                dom: 'Bfrtip',
                initComplete: function () {
                    this.api().columns().every( function () {
                        var that = this;
        
                        $( 'input', this.footer() ).on( 'keyup change clear', function () {
                            if ( that.search() !== this.value ) {
                                that
                                    .search( this.value )
                                    .draw();
                            }
                        } );
                    } );
                },
                buttons: [
                {
                    extend: "copy",
                    exportOptions: {
                    modifier: { search: 'none', selected: true}
                    }
                },
                {
                    extend: "csv",
                    exportOptions: {
                    modifier: { search: 'none', selected: true}
                    }
                },
                {
                    extend: "excel",
                    exportOptions: {
                    modifier: { search: 'none', selected: true}
                    }
                },
                {
                    extend: "pdfHtml5",
                    exportOptions: {
                    modifier: { search: 'none', selected: true}
                    }
                },
                {
                    extend: "print",
                    exportOptions: {
                    modifier: { search: 'none', selected: true}
                    }
                }, 
                {
                    extend: 'colvis',
                    text: 'Columns'
                },
                {
                    text: 'Select All',
                    action: function () {
                        exampleTable9.rows().select();
                    }
                },
                {
                    text: 'Select None',
                    action: function () {
                        exampleTable9.rows().deselect();
                    }
                },
                {
                    text: 'Hide Unselected',
                    action: function ( e, dt, button, config ) {
                        dt.rows({ selected: false }).nodes().to$().css({"display":"none"});
                    }
                },
                {
                    text: 'Clear/Reset',
                    action: function ( e, dt, button, config ) {
                        // Reset Column filtering
                        $('#example9 tfoot input').val('').change();
                        
                        // Reset column order
                        dt.colReorder.reset();

                        // Redraw table (and reset main search filter)
                        dt.search('').draw();

                        dt.rows().deselect();
                        dt.rows({ selected: false }).nodes().to$().css({"display":"table-row"});
                    }
                }
                ],
                "language": {
                    "info": "Initial Rows : _TOTAL_",
                    select: {
                                rows: {
                                    _: "",
                                    0: "",
                                    1: ""
                                }
                            }
                    },
                colReorder: true,
                "order": [[ 0, "asc" ]],
                paging: false,
                select: {
                    style: 'multi'
                }, 
                "columnDefs": [
                    {
                        "targets": [2],
                        "render": function ( data, type, row, meta ) {
                            if (data === "TBD")
                            {return data;}
                            else
                            {return '<a target="_blank" rel="noopener noreferrer" href="https://algoexplorer.io/asset/' + data + '">' + data + '</a>';}
                        }
                    },
                    {
                        "targets": [4, 5, 6, 7],
                        "render": function ( data, type, row, meta ) {
                            if (data === "TBD")
                            {return data;}
                            else
                            {return '<a target="_blank" rel="noopener noreferrer" href="' + data + '">' + 'Yes' + '</a>';}
                        }
                    }
            
                ],
                rowReorder: true
                })
            
            ;               
                                     
        if (location.hash) {
            $('a[href=\'' + location.hash + '\']').tab('show');
          }
          var activeTab = localStorage.getItem('activeTab');
          if (activeTab) {
            $('a[href="' + activeTab + '"]').tab('show');
          }
          
          $('body').on('click', 'a[data-toggle=\'tab\']', function (e) {
            e.preventDefault()
            var tab_name = this.getAttribute('href');
            if (history.pushState) {
              history.pushState(null, null, tab_name)
            }
            else {
              location.hash = tab_name
            }
            localStorage.setItem('activeTab', tab_name)
          
            $(this).tab('show');

            return false;
          });

          $(window).on('popstate', function () {
            var anchor = location.hash ||
              $('a[data-toggle=\'tab\']').first().attr('href');
            $('a[href=\'' + anchor + '\']').tab('show');
          });

        /*function sleep(milliseconds) {
            const date = Date.now();
            let currentDate = null;
            do {
                currentDate = Date.now();
            } while (currentDate - date < milliseconds);
        }*/

    });