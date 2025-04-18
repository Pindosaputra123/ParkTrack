<?php
// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

include "../../db/koneksi.php";
include "../../lib/user/edit-user.php";
include "../../lib/user/cari-user.php";
include "../hak-akses.php";

include "../info.php";

session_start();

// Error checking
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  die("File ini hanya menghandle method POST !");
}

if (!aksesAdmin($conn)) {
  die("Anda bukan admin !");
}

if (
  !isset($_POST['username']) ||
  !isset($_POST['id-user'])
) {
  die("Data yang dibutuhkan tidak diberikan !");
}

$id = $_POST['id-user'];
$username = $_POST['username'];
$is_admin = isset($_POST['is-admin']) ?  1 : 0;

$tab = $is_admin ? 'admin' : 'user';
$redirect = "../../admin/index.php?tab=$tab";

if (editUserOlehAdmin($conn, $id, $username, $is_admin)) {
  echo infoJs(
    "User berhasil di edit!",
    $redirect
  );
} else {
  echo infoJs(
    "User gagal di edit!",
    $redirect
  );
}