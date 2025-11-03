import { getMethodParams } from "./functions/en";

export default {
	labels:{
		// formats
		"common": "Common",
		"currency": "Currency",
		"number": "Number",
		"percent": "Percent",
		"date": "Date",
		"string": "Text",
		"custom-format": "Custom",
		"decimal-places":"Decimal places",
		"separator":"Group separator",
		"negative":"Negative number",
		"currency-symbol":"Currency",
		"date-format":"Date format",
		"format-docs":"How to create a format",
		// titles
		"undo-redo": "Undo/Redo",
		"font": "Font",
		"text": "Text",
		"cell": "Cell",
		"align": "Align",
		"format": "Number",
		"column": "Column",
		"borders": "Borders",
		"px": "px",
		"apply": "Apply",
		// popups and dialogs
		"cancel": "Cancel",
		"save": "Save",
		// multisheets
		"sheet": "Sheet",
		// conditions
		"conditional-format": "Conditional Format",
		"conditional-common": "Common",
		"conditional-text": "Text",
		"condition": "Condition",
		"conditional-style": "Style",
		"conditional-operator": "Operator",
		"conditional-between":"between",
		"conditional-not-equal":"not equal",
		// ranges
		"range": "Range",
		"range-title": "Named ranges",
		"range-name": "Name",
		"range-cells": "Range",
		"range-scope": "Scope",
		"range-global": "Book",
		// images
		"image-or": "or",
		"image-title": "Add image",
		"image-upload": "Select file for upload",
		"image-url": "URL (e.g. http://*)",
		// sparklines
		"sparkline-title": "Add sparkline",
		"sparkline-type": "Type",
		"sparkline-range": "Range",
		"sparkline-color": "Color",
		"sparkline-positive": "Positive",
		"sparkline-negative": "Negative",
		// custom format
		"format-title": "Set format",
		"format-pattern": "Format pattern",
		//dropdown
		"dropdown-empty": "Empty cells",
		"dropdown-empty-option": "Empty option",
		"dropdown-title": "Add dropdown",
		"dropdown-range": "Range",
		// confirm
		"ok": "OK",
		// import/export
		"import-title": "Import",
		"import-not-support": "Sorry, your browser does not support import",
		"export-title": "Export",
		"export-name": "Name of xslx file",
		"export-all-sheets":"Export all sheets",
		// add link
		"link-title": "Add Link",
		"link-name": "Text",
		"link-url": "URL",
		//images
		"image": "Image",
		"add-image-cell":"Add to cell",
		"add-image-top":"Add above cells",
		//charts
		"graph": "Graph",
		"add-sparkline":"Add to cell",
		"add-chart":"Add above cells",
		//controls
		"controls":"Controls",
		"add-checkbox":"Add checkbox",
		"add-radio":"Add radio group",
		//conditional format labels
		"display" : "Display",
		"value" : "Value",
		// confirm messages
		"range-remove-confirm": "Are you sure you want to remove the range permanently?",
		"sheet-remove-confirm": "Are you sure you want to remove the sheet permanently?",
		"merge-cell-confirm":"Only the left top value will remain after merging. Continue?",
		"error-range": "The range is incorrect!",
		"error-link": "The link is incorrect!",
		//print
		"print":"Print",
		"print-title":"Before you print..",
		"print-settings":"General settings",
		"print-paper":"Paper size",
		"print-layout":"Layout",
		"sheets":"Sheets:",
		"selection":"Selected cells",
		"borderless":"Hide gridlines",
		"sheet-names":"Show sheet names",
		"skip-rows":"Skip empty rows",
		"margin":"Hide margins",
		"page-letter":"Letter",
		"page-a4":"A4 (210x297mm)",
		"page-a3":"A3 (297x420mm)",
		"page-width":"Page width",
		"page-actual":"Actual Size",
		"page-portrait":"Portrait",
		"page-landscape":"Landscape",
		"external-ui":"External UI",
		"print-borders": "Show print borders",
		//comment
		"comment":"Comment",
		//resize
		"width":"Width",
		"height":"Height",
		"fit-content": "Fit to content",
		"default-size":"Reset to default",
		//views
		"edit-view":"Edit",
		"remove-view":"Remove",
		"chart-edit":"Edit chart",

		"chart-common":"Common",
		"chart-series":"Series",
		"chart-extras":"Extras",

		"export-view":"Download",
		"export-view-pdf":"PDF document",
		"export-view-png":"PNG image",
		"export-view-excel":"Excel file",

		"line-chart":"Line",
		"area-chart":"Area",
		"bar-chart":"Bar",
		"donut-chart":"Donut",
		"pie-chart":"Pie",
		"radar-chart":"Radar",
		"spline-chart":"Spline",
		"splinearea-chart":"Spline Area",
		"scatter-chart":"Scatter",

		"chart-scale":"Scale",
		"chart-x-axis":"X axis",
		"chart-y-axis":"Y axis",
		"chart-lines":"Lines",
		"chart-scale-color":"Scale color",
		"chart-xAxis-title":"Title",
		"chart-yAxis-title":"Title",
		"chart-col-xAxis":"Use left column as xAxis",
		"chart-col-yAxis":"Use left column as yAxis",
		"chart-row-xAxis":"Use top row as xAxis",
		"chart-row-yAxis":"Use top row as yAxis",
		"chart-xAxis-range":"Range",
		"chart-yAxis-origin":"Origin",
		"chart-yAxis-start":"Start",
		"chart-yAxis-end":"End",
		"chart-yAxis-step":"Step",
		"chart-yAxis-note":"* Set all the following parameters to see the effect",

		"chart-legend":"Legend",
		"chart-row-legend":"Use top row as legend",
		"chart-col-legend":"Use left column as legend",
		"chart-legend-range":"Legend range",
		"chart-legend-align":"Align",
		"chart-legend-left":"Left",
		"chart-legend-right":"Right",
		"chart-legend-center":"Center",
		"chart-legend-valign":"Vertical align",
		"chart-legend-top":"Top",
		"chart-legend-middle":"Middle",
		"chart-legend-bottom":"Bottom",

		"chart-item":"Data",
		"stacked-chart":"Stacked",
		"horizontal-chart":"Horizontal",
		"chart-range":"Range",
		"chart-series-color":"Color",
		"add-line":"Add line",
		"chart-type":"Type",
		"chart-tooltip":"Tooltips",
		"chart-label":"Labels",

		"chart-data-from":"Data series from",
		"chart-columns":"columns",
		"chart-rows":"rows",

		"chart-markers":"Markers",
		"chart-markers-square":"Square",
		"chart-markers-triangle":"Triangle",
		"chart-markers-diamond":"Diamond",
		"chart-markers-round":"Round",

		"chart-pie-3d":"3D",

		"chart-radar-circle":"Circled lines",

		//validation
		"add-cell-validation": "Add data validation",
		"remove-cell-validation": "Remove data validation",
		"highlight-invalid-data": "Highlight invalid data",
		"remove-highlight-invalid-data": "Remove highlighting of invalid data",
		"validation-placeholder-text": "Some text",
		"validation-type": "Type",
		"validation-any": "Any",
		"validation-date": "Date",
		"validation-number": "Number",
		"validation-text": "Text",
		"validation-text-length": "Text length",
		"validation-range": "Range",
		"validation-integer": "Integers only",
		"validation-ignore-empty": "Ignore empty",
		"validation-input-message": "Input message",
		"validation-error-title": "Error title",
		"validation-error-message": "Error message",
		"validation-error-handle": "Error handle",
		"validation-error-stop": "Stop",
		"validation-error-warning": "Warning",
		"validation-error-information": "Information",
		"validation-error-title-text": "Error",
		"validation-error-message-text": "Invalid data",
		"validation-error-save": "Save",
		"validation-error-restore": "Restore",
		//find and replace
		"find-replace-title": "Find and Replace",
		"find-title": "Find",
		"find-what": "Find what:",
		"replace-with": "Replace with:",
		"find-within": "Within:",
		"find-sheet": "Sheet",
		"find-book": "Book",
		"find-match-case": "Match case",
		"find-match-entire-content": "Match entire cell contents",
		"find-look-in": "Look in",
		"find-formulas": "Formulas",
		"find-values": "Values",
		"find-all-sheet": "Sheet",
		"find-all-cell": "Cell",
		"find-all-value": "Value",
		"find-all-formula": "Formula",
		"replace-all": "Replace all",
		"replace": "Replace",
		"find-all": "Find all",
		"find-next": "Find next"
	},
	tooltips: {
		// "font" block
		"color": "Font color",
		"background": "Background color",
		"borders": "Borders",
		"borders-no": "Clear borders",
		"borders-left": "Left border",
		"borders-top": "Top border",
		"borders-right": "Right border",
		"borders-bottom": "Bottom border",
		"borders-all": "All borders",
		"borders-outer": "Outer borders",
		"borders-top-bottom": "Top and bottom borders",
		"borders-color": "Border color",
		"borders-line": "Border line type",

		"add-sheet": "Add Sheet",
		"sheet": "Sheet",
		"scale": "Scale",
		"show-sheet": "Show sheet",
	},
	menus:{
		"rename-sheet": "Rename sheet",
		"copy-sheet": "Copy to new sheet",
		"remove-sheet": "Remove sheet",
		"hide-sheet": "Hide sheet",

		"new": "New",
		"common": "common",
		"text": "text",
		"graph": "Graph",
		"image": "Image",
		"data": "Data",
		"sort": "Sort",
		
		// "copy-paste" context menu
		"cut": "Cut",
		"copy": "Copy",
		"paste": "Paste",
		"special-paste": "Special paste",
		"paste-values": "Values",
		"paste-formulas": "Formulas",
		"paste-styles": "Styles",
		"paste-conditions": "Conditional formats",
		"paste-validation": "Validation",
	},
	actions: {
		// "file" block
		"file": "File",
		"sheet": "Sheets",
		"new-sheet": "New sheet",
		"copy-sheet": "Copy to new sheet",
		"remove-sheet": "Remove sheet",
		"hide-sheet": "Hide sheet",
		"excel-import": "Import from Excel",
		"excel-export": "Export to Excel",
		"print": "Print",
		"print-borders": "Hide/show print borders",
		// "undo-redo" block
		"undo-redo": "Undo/Redo",
		"undo": "Undo",
		"redo": "Redo",
		// "font" block
		"font": "Font",
		"font-family": "Font family",
		"font-weight": "Bold",
		"font-style": "Italic",
		"underline": "Underline",
		"strike": "Strike",
		"font-size": "Font size",
		// "align" block
		"align": "Align",
		"text-align": "Horizontal align",
		"text-align-left": "Left align",
		"text-align-center": "Center align",
		"text-align-right": "Right align",
		"vertical-align": "Vertical align",
		"vertical-align-top": "Top align",
		"vertical-align-middle": "Middle align",
		"vertical-align-bottom": "Bottom align",
		"span": "Merge",
		"wrap": "Text wrap",
		"increase-indent" : "Increase indent",
		"decrease-indent": "Decrease indent",
		// "number" block
		"number": "Number",
		"format": "Number format",
		"format-common": "Common",
		"format-price": "Currency",
		"format-int": "Number",
		"format-percent": "Percent",
		"format-date": "Date",
		"format-string": "Text",
		"format-custom": "Custom",
		"increase-decimals":"Increase decimal places",
		"decrease-decimals":"Decrease decimal places",
		// "edit" block
		"edit": "Edit",	
		"sort-asc": "Sort A to Z",
		"sort-desc": "Sort Z to A",
		"create-filter": "Create/remove filters",
		"add-range": "Named ranges",
		"conditional-format": "Conditional format",
		"lock-cell": "Lock/unlock cell",
		"add-link": "Add link",
		"add-dropdown": "Add dropdown",
		"clear": "Clear",
		"clear-value":"Values",
		"clear-style":"Styles",
		"clear-conditional-formats":"Conditional formats",
		"clear-dropdown-editors":"Dropdowns",
		"clear-filters":"Filters",
		"clear-comments":"Comments",
		"clear-all":"All",
		"validation": "Validation",
		"add-cell-validation": "Add data validation",
		"remove-cell-validation": "Remove data validation",
		"highlight-invalid-data": "Highlight invalid data",
		"remove-highlight-invalid-data": "Remove highlighting of invalid data",
		"find": "Find and Replace",
		// "insert" block
		"insert": "Insert",
		"image": "Image",
		"add-image": "Image",
		"add-image-cell":"Add to cell",
		"add-image-top":"Add above cells",
		"graph": "Graph",
		"add-sparkline":"Add to cell",
		"add-chart":"Add above cells",
		"add-comment": "Comment",
		"controls":"Controls",
		"add-checkbox":"Add checkbox",
		"add-radio":"Add radio group",
		// "view" block
		"view": "View",
		"row": "Rows",
		"add-row": "Insert row",
		"del-row": "Delete row",
		"show-row": "Show row",
		"hide-row": "Hide row",
		"resize-row": "Resize row",
		"format-row":"Row format",
		"column": "Columns",
		"add-column": "Insert column",
		"del-column": "Delete column",
		"show-column": "Show column",
		"hide-column": "Hide column",
		"resize-column": "Resize column",
		"format-column":"Column format",
		"hide-gridlines": "Hide/show gridlines",
		"hide-headers": "Hide/show headers",
		"freeze-rows": "Freeze/unfreeze rows",
		"freeze-columns": "Freeze/unfreeze columns",
		"show-formulas": "Hide/Show formulas",
		// "other" block
		"other": "Other",
		"find-readonly": "Find"
	},
	table:{
		"math-error":"#ERROR!",
		"math-ref-error":"#REF!",
		"format-error":"INCORRECT FORMAT",
		"math-xss-error": "#XSS!"
	},
	liveEditor:{
		"edit":"Edit:",
		"date": "Date",
		"number": "Number",
		"text": "Text",
		"financial": "Financial",
		"array": "Array",
		"common": "Common",
		"search": "Search",
		"category": "Category",
		"functions-syntax": Object.assign(getMethodParams() , {
			"IMAGE": [
				[
					"Url",
					"Required. Image link"
				]
			],
			"HYPERLINK": [
				[
					"Link_location",
					"Required. The path and file name to the document to be opened. Link_location can refer to a place in a document — such as a specific cell or named range."
				],
				[
					"Friendly_name",
					"Optional. The jump text or numeric value that is displayed in the cell. Friendly_name is displayed in blue and is underlined. If friendly_name is omitted, the cell displays the link_location as the jump text."
				]
			],
			"SPARKLINE": [
				[
					"Range",
					"Required. Range or named range"
				],
				[
					"Type",
					"Required. Sparkline type"
				],
				[
					"Positive_color",
					"Required. Positive color"
				],
				[
					"Negative_color",
					"Required. Negative color"
				]
			],
			"CHECKBOX": [
				[
					"State",
					"Optional. Checkbox state"
				]
			],
			"RADIO": [
				[
					"Y_position",
					"Required. Y-axis position in radio group"
				],
				[
					"X_position",
					"Required. X-axis position in radio group"
				],
				[
					"Row_count",
					"Required. Rows count in radio group"
				],
				[
					"Col_count",
					"Required. Columns count in radio group"
				],
				[
					"State",
					"Optional. Radio button state"
				]
			]
		})
	},
	formats:{
		"dateFormat": "mm/dd/yyyy",
		"timeFormat": "hh:mm AM/PM",
		"longDateFormat": "dd mmmm yyyy",
		"fullDateFormat": "mm/dd/yyyy hh:mm AM/PM",
		"parseDateTime": "%m/%d/%Y %G:%i:%s",
		"parseDate": "%m/%d/%Y",
		"currencies": [
			"{obj} €",
			"¥{obj}",
			"R$ {obj}",
			"{obj} rub."
		]
	}
};
