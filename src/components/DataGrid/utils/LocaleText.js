export const SUPPORTED_LOCALE = {
  Arabic: 'arSD',
  Bulgarian: 'bgBG',
  Czech: 'csCZ',
  Danish: 'daDK',
  Dutch: 'nlNL',
  English: 'enUS',
  Finnish: 'fiFI',
  French: 'frFR',
  German: 'deDE',
  Greek: 'elGR',
  Hebrew: 'heIL',
  Hungarian: 'huHU',
  Italian: 'itIT',
  Japanese: 'jaJP',
  Korean: 'koKR',
  Norwegian: 'nbNO',
  Persian: 'faIR',
  Polish: 'plPL',
  Portuguese: 'ptBR',
  Romanian: 'roRO',
  Russian: 'ruRU',
  Slovak: 'skSK',
  Spanish: 'esES',
  Swedish: 'svSE',
  Turkish: 'trTR',
  Ukraine: 'ukUA',
  Simplified: 'zhCN',
  Traditional: 'zhTW',
};

export const LOCALE_DEFAULT_TEXT = {
  esES: {
    // Root 
    noRowsLabel: 'Datos no encontrados . . .',
    toolbarDensityLabel: 'DOS DATOS',
  },

  enUS: {
    // Root
    noRowsLabel: 'No rows',
    noResultsOverlayLabel: 'No results found.',
    errorOverlayDefaultLabel: 'An error occurred.',

    // Density selector toolbar button text
    toolbarDensity: 'Density',
    toolbarDensityLabel: 'Topical',
    toolbarDensityCompact: 'Compact',
    toolbarDensityStandard: 'Standard',
    toolbarDensityComfortable: 'Comfortable',

    // Columns selector toolbar button text
    toolbarColumns: 'Columns',
    toolbarColumnsLabel: 'Select columns',

    // Filters toolbar button text
    toolbarFilters: 'Filters',
    toolbarFiltersLabel: 'Show filters',
    toolbarFiltersTooltipHide: 'Hide filters',
    toolbarFiltersTooltipShow: 'Show filters',

    // Quick filter toolbar field
    toolbarQuickFilterPlaceholder: 'Search…',
    toolbarQuickFilterLabel: 'Search',
    toolbarQuickFilterDeleteIconLabel: 'Clear',

    // Export selector toolbar button text
    toolbarExport: 'Export',
    toolbarExportLabel: 'Export',
    toolbarExportCSV: 'Download as CSV',
    toolbarExportPrint: 'Print',
    toolbarExportExcel: 'Download as Excel',

    // Columns panel text
    columnsPanelTextFieldLabel: 'Find column',
    columnsPanelTextFieldPlaceholder: 'Column title',
    columnsPanelDragIconLabel: 'Reorder column',
    columnsPanelShowAllButton: 'Show all',
    columnsPanelHideAllButton: 'Hide all',

    // Filter panel text
    filterPanelAddFilter: 'Add filter',
    filterPanelDeleteIconLabel: 'Delete',
    filterPanelLinkOperator: 'Logic operator',
    filterPanelOperators: 'Operator', // TODO v6: rename to filterPanelOperator
    filterPanelOperatorAnd: 'And',
    filterPanelOperatorOr: 'Or',
    filterPanelColumns: 'Columns',
    filterPanelInputLabel: 'Value',
    filterPanelInputPlaceholder: 'Filter value',

    // Filter operators text
    filterOperatorContains: 'contains',
    filterOperatorEquals: 'equals',
    filterOperatorStartsWith: 'starts with',
    filterOperatorEndsWith: 'ends with',
    filterOperatorIs: 'is',
    filterOperatorNot: 'is not',
    filterOperatorAfter: 'is after',
    filterOperatorOnOrAfter: 'is on or after',
    filterOperatorBefore: 'is before',
    filterOperatorOnOrBefore: 'is on or before',
    filterOperatorIsEmpty: 'is empty',
    filterOperatorIsNotEmpty: 'is not empty',
    filterOperatorIsAnyOf: 'is any of',

    // Filter values text
    filterValueAny: 'any',
    filterValueTrue: 'true',
    filterValueFalse: 'false',

    // Column menu text
    columnMenuLabel: 'Menu',
    columnMenuShowColumns: 'Show columns',
    columnMenuFilter: 'Filter',
    columnMenuHideColumn: 'Hide',
    columnMenuUnsort: 'Unsort',
    columnMenuSortAsc: 'Sort by ASC',
    columnMenuSortDesc: 'Sort by DESC',
  }
}
