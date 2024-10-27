<script setup>
import { ref } from 'vue';

const class_header = ref([
    'text-black-alpha-90',
    'dark:text-white-alpha-90'
])

const style_header = ref({
    // color: '#000',
    fontSize: '17px'
})

const class_content = ref([
    'text-black-alpha-90',
    'dark:text-white-alpha-90'
])

const style_content = ref({
    // color: '#000',
    fontSize: '16px',
    textAlign: 'justify',
    textJustify: 'inter-word',
    lineHeight: 1.8,
    letterSpacing: '0.03em'
})
</script>

<template>
    <div class="flex flex-col">

        <div class="flex flex-col md:flex-row gap-8">
            <div class="md:w-1/2">
                <div class="card">
        <Accordion value="0">
            <AccordionPanel value="0">
                <AccordionHeader :style="style_header" :class="class_header">Apa yang dimaksud Tuberkulosis? </AccordionHeader>
                <AccordionContent>
                    <p :style="style_content" :class="class_content">
                        Tuberkulosis, sering disingkat TB atau TBC, adalah penyakit menular yang disebabkan oleh bakteri Mycobacterium tuberculosis. Penyakit ini dapat menyerang siapa saja dan organ tubuh yang diserang biasanya adalah paru-paru, tulang belakang, kulit, otak, kelenjar getah bening, dan jantung. 
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="1">
                <AccordionHeader :style="style_header" :class="class_header">Bagaimana penularan TB? </AccordionHeader>
                <AccordionContent>
                    <p :style="style_content" :class="class_content">
                        Penularan atau infeksi terjadi saat kuman TB yang berada dan bertebaran di udara terhirup oleh orang lain. Saat penderita TB batuk atau bersin tanpa menutup mulut, bakteri akan tersebar ke udara dalam bentuk percikan dahak atau droplet. Sekali batuk dapat mengeluarkan 3000 percikan dahak yang mengandung sampai 3500 kuman M. tuberculosis.Sedangkan sekali bersin mengeluarkan 4500 - 1 juta kuman M. tuberculosis. Bakteri masuk ke saluran pernapasan menuju paru-paru dan dapat menyebar ke bagian tubuh lainnya. Reaksi daya tahan tubuh akan terjadi 6-14 minggu setelah infeksi. Lesi umumnya sembuh total namun kuman dapat tetap hidup dalam lesi tersebut dalam keadaan dormant dan suatu saat dapat aktif kembali tergantung pada daya tahan tubuh.
                    </p>
                    <br>
                    <div class="flex justify-content-center flex-wrap">
                        <img src="https://lh5.googleusercontent.com/5DiBH3paUtGFrirjZFxCYYFY11DJliTx0NBWx3RwGDtSzIGDy6Kw5fp3iHeA_9csFbeJkgO-iQAf72ZnVMGbHf7AdIqTFxG83iHCKHVYtAMzyX7nbNEi2yB9QuoLmyyBhmZIksQkKQOMiOZSnIo7ZhY" style="width: 100%;">
                    </div>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="2">
                <AccordionHeader :style="style_header" :class="class_header">Gejala TB</AccordionHeader>
                <AccordionContent>
                    <p :style="style_content" :class="class_content">
                        Gejala utamanya adalah batuk terus-menerus (berdahak maupun tidak berdahak). Gejala lainnya adalah demam dan meriang dalam jangka waktu yang panjang; sesak nafas dan  nyeri dada; berat badan menurun; ketika batuk terkadang dahak bercampur darah; nafsu makan menurun; dan, berkeringat di malam hari meski tanpa melakukan kegiatan. 
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="3">
                <AccordionHeader :style="style_header" :class="class_header">Kelompok Berisiko</AccordionHeader>
                <AccordionContent>
                    <p :style="style_content" :class="class_content">
                        Siapapun yang berada di dekat orang yang terinfeksi TB bisa terkena dampaknya. Namun yang paling berisiko ialah anak-anak, orang penderita HIV/AIDS, lansia, orang dengan Diabetes Melitus (DM), orang yang sering kontak langsung dengan penderita TB, serta perokok aktif. Penyakit ini akan menyerang sistem kekebalan tubuh, terutama yang mengalami penurunan daya tahan tubuh. Selain itu risiko penularan TB juga cukup besar pada orang yang tinggal di tempat tinggal yang tidak memenuhi syarat kesehatan, misalnya lingkungan padat dan kumuh, tempat pendidikan dengan asrama, rumah tahanan atau lembaga pemasyarakatan. 
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="4">
                <AccordionHeader :style="style_header" :class="class_header">Pemeriksaan TB</AccordionHeader>
                <AccordionContent>
                    <ul class="list-decimal" :style="style_content" :class="class_content">
                        <li>Pemeriksaan Dahak (pemeriksaan BTA)
                            <p>Dahak diambil 2 kali dalam 1 hari atau 2 hari, yaitu SS/SP. Disebut SS jika sewaktu datang ke fasilitas pelayanan kesehatan (hari ke-1) diambil 2 dahak dengan interval minimal 1 jam. Sementara SP jiwa sewaktu datang ke fasilitas pelayanan kesehatan (hari ke-1) dan pagi hari setelah bangun tidur (hari ke-2).</p>
                        </li>
                        <li>Tes Tuberkulin
                            <p>Uji yang digunakan untuk penunjang diagnosis TB dengan cara menyuntikkan 0,1 ml tuberkulin purified protein derivative (PPD) ke permukaan bagian dalam lengan bawah. </p>
                        </li>
                        <li>Rontgen Dada
                            <p>Pemeriksaan tambahan berupa rontgen foto dada (bila pemeriksaan dahak hasilnya negatif, sedangkan gejala TB lainnya ada).</p>
                        </li>
                        <li> Tes Cepat Molekuler (TCM)
                            <p>Adalah alat diagnosis utama yang digunakan untuk penegakan diagnosis TB. </p>
                        </li>
                    </ul>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="5">
                <AccordionHeader :style="style_header" :class="class_header">Tujuan dan Target Penanggulangan TB</AccordionHeader>
                <AccordionContent>
                    <p :style="style_content" :class="class_content">
                        Tujuannya untuk melindungi kesehatan masyarakat dari penularan TB agar tidak terjadi kesakitan, kematian, dan kecacatan. Target program penanggulangan TB nasional yaitu eliminasi pada tahun 2035 dan Indonesia bebas TB tahun 2050. 
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="6">
                <AccordionHeader :style="style_header" :class="class_header">Apa saja kegiatan penanggulangan TB?</AccordionHeader>
                <AccordionContent>
                    <ul class="list-decimal" :style="style_content" :class="class_content">
                        <li>Promosi kesehatan
                            <p>Salah satu tujuannya adalah untuk memberdayakan masyarakat agar berperan aktif dalam rangka mencegah penularan TB, meningkatkan perilaku hidup bersih dan sehat, serta menghilangkan diskriminasi terhadap pasien TB. </p>
                        </li>
                        <li>Surveilans TB
                            <p>Pemantauan dan analisis data dan informasi tentang kejadian TB dan faktor yang mempengaruhinya. Hasilnya akan digunakan dalam perencanaan, pelaksanaan, dan penilaian program penanggulangan TB serta untuk meningkatkan kewaspadaan dini dan tindakan respon terhadap terjadinya peningkatan TB resistan obat. </p>
                        </li>
                        <li>Pengendalian faktor risiko TB
                            <p>Untuk mencegah, mengurangi penularan dan kejadian penyakit TB.</p>
                        </li>
                        <li> Penemuan dan penanganan kasus TB
                            <p>Penemuan kasus TB dilakukan secara aktif maupun pasif. Secara aktif dilakukan melalui investigasi dan pemeriksaan kontak; skrining secara massal (terutama pada kelompok rentan dan beresiko); dan skrining pada kondisi khusus. Penemuan secara pasif dilakukan melalui pemeriksaan pasien yang datang ke fasilitas pelayanan kesehatan.</p>
                            <p>Penanganan kasus dilakukan untuk memutus mata rantai penularan dan/atau pengobatan pasien. Tata laksana kasus terdiri atas: pengobatan dan penanganan efek samping; pengawasan kepatuhan menelan obat; pemantauan kemajuan pengobatan dan hasil pengobatan; dan/atau, pelacakan kasus mangkir. Setiap pasien TB berkewajiban mematuhi semua tahapan dalam penanganan kasus TB.</p>
                        </li>
                        <li> Pemberian kekebalan
                            <p>Imunisasi BCG pada bayi merupakan tindakan pemberian kekebalan yang dilakukan untuk mengurangi risiko tingkat keparahan TB.</p>
                        </li>
                        <li> Pemberian obat pencegahan
                            <p>Obat pencegahan TB diberikan pada: </p>
                            <ul class="list-decimal" :style="style_content" :class="class_content">
                                <li>anak usia di bawah 5 tahun yang kontak erat dengan pasien TB aktif</li>
                                <li>orang dengan HIV dan AIDS (ODHA) yang tidak terdiagnosa TB</li>
                                <li>populasi tertentu lainnya. Pemberian obat pencegahan TB pada anak dan ODHA dilakukan selama 6 (enam) bulan</li>
                            </ul>
                        </li>
                    </ul>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="7">
                <AccordionHeader :style="style_header" :class="class_header">Gaya Hidup Sehat dan Pencegahan TB</AccordionHeader>
                <AccordionContent>
                    <ul class="list-decimal" :style="style_content" :class="class_content">
                        <li>Makan makanan yang bergizi untuk meningkatkan daya tahan tubuh</li>
                        <li>Menjaga sirkulasi udara yang baik dengan cara membuka pintu dan jendela tiap pagi  supaya rumah mendapatkan cukup sinar matahari dan udara segar</li>
                        <li>Menjemur alas tidur agar tidak lembab</li>
                        <li>Mendapatkan suntik vaksin BCG bagi anak usia di bawah 5 tahun untuk menghindari TB berat (meningitis dan milier)</li>
                        <li>Olahraga rutin minimal 2x seminggu</li>
                        <li>Tidak merokok</li>
                        <li>Tidak membuang dahak atau meludah di sembarang tempat</li>
                        <li>Terapkan etika batuk saat batuk atau bersin. </li>
                    </ul>
                    <br>
                    <div class="flex justify-content-center flex-wrap">
                        <img src="https://lh6.googleusercontent.com/hhXwdMQxvDSxJyNOdyDPpzvvF1sjfdI5-JzT385XPF_8wK9lKBtqLO4Bjy2ToEazruA4IJWYJwiSaZdsLOEVq8qQ3BkBVHPww0qK9hyZ1yCBF1W6W9WjFyJdDMfNgyZGIDnzfxypn9pvlnZIqgs35DE" style="width: 100%;">
                    </div>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="8">
                <AccordionHeader :style="style_header" :class="class_header">Pengobatan TB</AccordionHeader>
                <AccordionContent>
                    <p :style="style_content" :class="class_content">
                        Pengobatan berlangsung selama 6-8 bulan yang terbagi dalam 2 tahap. Pada tahap awal (intensif), obat diminum setiap hari selama 2 atau 3 bulan. Kemudian pada tahap akhir, obat diminum 3 kali seminggu selama 4 atau 5 bulan. 
                    </p>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>
    </div>
            </div>
        </div>

    </div>
</template>
