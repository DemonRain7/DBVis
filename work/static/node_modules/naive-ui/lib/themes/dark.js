"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.darkTheme = void 0;
const common_1 = require("../_styles/common");
const styles_1 = require("../alert/styles");
const styles_2 = require("../anchor/styles");
const styles_3 = require("../auto-complete/styles");
const styles_4 = require("../avatar/styles");
const styles_5 = require("../avatar-group/styles");
const styles_6 = require("../back-top/styles");
const styles_7 = require("../badge/styles");
const styles_8 = require("../breadcrumb/styles");
const styles_9 = require("../button/styles");
const styles_10 = require("../button-group/styles");
const styles_11 = require("../calendar/styles");
const styles_12 = require("../card/styles");
const styles_13 = require("../carousel/styles");
const styles_14 = require("../cascader/styles");
const styles_15 = require("../checkbox/styles");
const styles_16 = require("../code/styles");
const styles_17 = require("../collapse/styles");
const styles_18 = require("../collapse-transition/styles");
const styles_19 = require("../color-picker/styles");
const styles_20 = require("../data-table/styles");
const styles_21 = require("../date-picker/styles");
const styles_22 = require("../descriptions/styles");
const styles_23 = require("../dialog/styles");
const styles_24 = require("../divider/styles");
const styles_25 = require("../drawer/styles");
const styles_26 = require("../dropdown/styles");
const styles_27 = require("../dynamic-input/styles");
const styles_28 = require("../dynamic-tags/styles");
const styles_29 = require("../element/styles");
const styles_30 = require("../ellipsis/styles");
const styles_31 = require("../empty/styles");
const styles_32 = require("../equation/styles");
const styles_33 = require("../form/styles");
const styles_34 = require("../gradient-text/styles");
const styles_35 = require("../icon/styles");
const styles_36 = require("../icon-wrapper/styles");
const styles_37 = require("../image/styles");
const styles_38 = require("../input/styles");
const styles_39 = require("../input-number/styles");
const styles_40 = require("../layout/styles");
const styles_41 = require("../legacy-transfer/styles");
const styles_42 = require("../list/styles");
const styles_43 = require("../loading-bar/styles");
const styles_44 = require("../log/styles");
const styles_45 = require("../menu/styles");
const styles_46 = require("../mention/styles");
const styles_47 = require("../message/styles");
const styles_48 = require("../modal/styles");
const styles_49 = require("../notification/styles");
const styles_50 = require("../page-header/styles");
const styles_51 = require("../pagination/styles");
const styles_52 = require("../popconfirm/styles");
const styles_53 = require("../popover/styles");
const styles_54 = require("../popselect/styles");
const styles_55 = require("../progress/styles");
const styles_56 = require("../radio/styles");
const styles_57 = require("../rate/styles");
const styles_58 = require("../result/styles");
const styles_59 = require("../legacy-grid/styles");
const styles_60 = require("../_internal/scrollbar/styles");
const styles_61 = require("../select/styles");
const styles_62 = require("../skeleton/styles");
const styles_63 = require("../slider/styles");
const styles_64 = require("../space/styles");
const styles_65 = require("../spin/styles");
const styles_66 = require("../statistic/styles");
const styles_67 = require("../steps/styles");
const styles_68 = require("../switch/styles");
const styles_69 = require("../table/styles");
const styles_70 = require("../tabs/styles");
const styles_71 = require("../tag/styles");
const styles_72 = require("../thing/styles");
const styles_73 = require("../time-picker/styles");
const styles_74 = require("../timeline/styles");
const styles_75 = require("../tooltip/styles");
const styles_76 = require("../transfer/styles");
const styles_77 = require("../tree-select/styles");
const styles_78 = require("../typography/styles");
const styles_79 = require("../tree/styles");
const styles_80 = require("../upload/styles");
const styles_81 = require("../watermark/styles");
exports.darkTheme = {
    name: 'dark',
    common: common_1.commonDark,
    Alert: styles_1.alertDark,
    Anchor: styles_2.anchorDark,
    AutoComplete: styles_3.autoCompleteDark,
    Avatar: styles_4.avatarDark,
    AvatarGroup: styles_5.avatarGroupDark,
    BackTop: styles_6.backTopDark,
    Badge: styles_7.badgeDark,
    Breadcrumb: styles_8.breadcrumbDark,
    Button: styles_9.buttonDark,
    ButtonGroup: styles_10.buttonGroupDark,
    Calendar: styles_11.calendarDark,
    Card: styles_12.cardDark,
    Carousel: styles_13.carouselDark,
    Cascader: styles_14.cascaderDark,
    Checkbox: styles_15.checkboxDark,
    Code: styles_16.codeDark,
    Collapse: styles_17.collapseDark,
    CollapseTransition: styles_18.collapseTransitionDark,
    ColorPicker: styles_19.colorPickerDark,
    DataTable: styles_20.dataTableDark,
    DatePicker: styles_21.datePickerDark,
    Descriptions: styles_22.descriptionsDark,
    Dialog: styles_23.dialogDark,
    Divider: styles_24.dividerDark,
    Drawer: styles_25.drawerDark,
    Dropdown: styles_26.dropdownDark,
    DynamicInput: styles_27.dynamicInputDark,
    DynamicTags: styles_28.dynamicTagsDark,
    Element: styles_29.elementDark,
    Empty: styles_31.emptyDark,
    Ellipsis: styles_30.ellipsisDark,
    Equation: styles_32.equationDark,
    Form: styles_33.formDark,
    GradientText: styles_34.gradientTextDark,
    Icon: styles_35.iconDark,
    IconWrapper: styles_36.iconWrapperDark,
    Image: styles_37.imageDark,
    Input: styles_38.inputDark,
    InputNumber: styles_39.inputNumberDark,
    LegacyTransfer: styles_41.legacyTransferDark,
    Layout: styles_40.layoutDark,
    List: styles_42.listDark,
    LoadingBar: styles_43.loadingBarDark,
    Log: styles_44.logDark,
    Menu: styles_45.menuDark,
    Mention: styles_46.mentionDark,
    Message: styles_47.messageDark,
    Modal: styles_48.modalDark,
    Notification: styles_49.notificationDark,
    PageHeader: styles_50.pageHeaderDark,
    Pagination: styles_51.paginationDark,
    Popconfirm: styles_52.popconfirmDark,
    Popover: styles_53.popoverDark,
    Popselect: styles_54.popselectDark,
    Progress: styles_55.progressDark,
    Radio: styles_56.radioDark,
    Rate: styles_57.rateDark,
    Result: styles_58.resultDark,
    Row: styles_59.rowDark,
    Scrollbar: styles_60.scrollbarDark,
    Select: styles_61.selectDark,
    Skeleton: styles_62.skeletonDark,
    Slider: styles_63.sliderDark,
    Space: styles_64.spaceDark,
    Spin: styles_65.spinDark,
    Statistic: styles_66.statisticDark,
    Steps: styles_67.stepsDark,
    Switch: styles_68.switchDark,
    Table: styles_69.tableDark,
    Tabs: styles_70.tabsDark,
    Tag: styles_71.tagDark,
    Thing: styles_72.thingDark,
    TimePicker: styles_73.timePickerDark,
    Timeline: styles_74.timelineDark,
    Tooltip: styles_75.tooltipDark,
    Transfer: styles_76.transferDark,
    Tree: styles_79.treeDark,
    TreeSelect: styles_77.treeSelectDark,
    Typography: styles_78.typographyDark,
    Upload: styles_80.uploadDark,
    Watermark: styles_81.watermarkDark
};
