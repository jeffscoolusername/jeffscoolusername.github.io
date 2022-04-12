        $(document)
            .ready(function() {
                $.ajax({
                    url: 'https://jsonplaceholder.typicode.com/users',
                    method: 'get',
                    dataType: 'json',
                    success: function(data) {
                        var exampleTable = $('#example')
                            .DataTable({
                                data: data,
                                'aaSorting': [[1, 'asc']],
                                dom: "<'row'<'col-md-6 text-left'T><'col-md-6 text-right'f>>" +
                                    "<'row'<'col-md-12't>>" +
                                    "<'row'<'col-md-6'i><'col-md-6'p>>",
                                'columnDefs': [
                                    { 'width': '25px', 'targets': [0] },
                                    { 'sortable': false, 'targets': [0] }
                                ],
                                'columns': [
                                    {
                                        'data': 'id',
                                        'render': function(data, type, full, meta) {
                                            return '<button class="btn btn-primary btn-xs" id="btnOne"><i class="fa fa-edit"></i></button>';
                                        }
                                    },
                                    { 'data': 'name' },
                                    { 'data': 'username' },
                                    {
                                        //'data': 'email',
                                        'render': function(data, type, full, meta) {
                                            return '<a href="mailto:' + full.email + '?">E-Mail</a>';
                                        }
                                    },
                                    { 'data': 'phone' },
                                    {
                                        //'data': 'email',
                                        'render': function(data, type, full, meta) {
                                            return '<a href="http://' + full.website + '"target=_blank">Website</a>';
                                        }
                                    },
                                ]
                            });
                    }
                });
            });
            
           