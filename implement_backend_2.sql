-- 1 Ambil seluruh data karyawan
SELECT * FROM employess;
-- 2 Hitung ada berapa banyak manager
SELECT COUNT(*) AS total_managers FROM employees WHERE job = 'manager';
-- 3 Tampilkan daftar nama dan gaji (salary) dari karyawan yang bekerja di departemen "Sales" atau
-- "Marketing"
SELECT name, salary FROM employees WHERE department IN ('sales', 'marketing');
-- 4 Hitung rata-rata gaji (salary) dari karyawan yang bergabung (joined) dalam 5 tahun terakhir (berdasarkan
-- kolom "joined_date")
SELECT AVG(salary) AS average_salary
FROM employees
WHERE joined_date >= CURRENT_DATE - INTERVAL '5 years';
-- 5 Tampilkan 5 karyawan dengan total penjualan (sales) tertinggi dari tabel "employees" dan "sales_data"
SELECT e.employe_id, e.name, e.salary, SUM(s.sales_id) AS total_sales
FROM employees e
JOIN sales_data s ON e.employe_id = s.employe_id_sales
GROUP BY e.employe_id, e.name, e.salary
ORDER BY total_sales DESC
LIMIT 5;