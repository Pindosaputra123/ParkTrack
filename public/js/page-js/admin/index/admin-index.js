import { qs, qsa } from "../../../utils/dom-selector.js";
import { adminMotorHandler } from "./admin-motor-handler.js";
import { editUserHandler } from "./admin-user-handler.js";
import { initAdminTooltip } from "./admin-tooltip.js";
import { CustomDialog } from "../../../components/dialog.js";
import { Sidebar } from "../../../components/sidebar.js";
import { KontrolTabel } from "../../../components/kontrol-tabel.js";
import { Tema } from "../../../components/tema.js";

export const tambahMotorBtn = qs("#tambah-motor-btn");
export const submitMotorBtn = qs("#submit-motor-btn");
export const hapusMotorforms = qsa("#hapus-motor-form");

export const opsiUser = qsa("#opsi-user");
export const editUserBtns = qsa("#edit-user-btn");
export const hapusUserforms = qsa("#hapus-user-form");

/** @type {HTMLInputElement} */
export const platUserBaruCheckbox = qs("[name='plat-user-baru']");

/** @type {HTMLSelectElement} */
export const platUserLamaSelection = qs("[name='plat-user-lama']");

export const actionDialog = new CustomDialog(
  "#action-dialog",
  "#close-action-dialog-btn",
  () => {
    formEditUser?.classList.add("hidden");
    formTambahMotor?.classList.add("hidden");
  },
);

export const sidebar = new Sidebar(
  "#sidebar",
  "#hamburger-menu-btn",
  "#close-sidebar-btn",
  "#content",
);

new KontrolTabel("#input-halaman", halaman => {
  window.location.href = `?tab=${window.tabAktif}&halaman=${halaman}&keyword=${window.keyword}`;
});

new Tema("#tema-btn", "#icon-tema");

// konten dialog
export const dialogTitle = qs("#dialog-title");
export const formTambahMotor = qs("#form-tambah-motor");
export const formEditUser = qs("#form-edit-user");

// inisialisasi
initAdminTooltip();
editUserHandler();
adminMotorHandler();