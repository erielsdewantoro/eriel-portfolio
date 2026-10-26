from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether

OUT = r"C:\Eriel\Codex_Erl\outputs\CV_Eriel_Staff_Admin_Data_Entry.pdf"
W, H = A4
NAVY = colors.HexColor('#1F4E79')
GRAY = colors.HexColor('#505050')
PALE = colors.HexColor('#F3F6F9')

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name='Name', fontName='Helvetica-Bold', fontSize=18, leading=21, alignment=TA_CENTER, textColor=colors.black, spaceAfter=2))
styles.add(ParagraphStyle(name='Role', fontName='Helvetica-Bold', fontSize=10.5, leading=13, alignment=TA_CENTER, textColor=NAVY, spaceAfter=3))
styles.add(ParagraphStyle(name='Contact', fontName='Helvetica', fontSize=8.8, leading=11, alignment=TA_CENTER, textColor=colors.black, spaceAfter=1))
styles.add(ParagraphStyle(name='Link', fontName='Helvetica', fontSize=8.4, leading=10, alignment=TA_CENTER, textColor=GRAY, spaceAfter=5))
styles.add(ParagraphStyle(name='Section', fontName='Helvetica-Bold', fontSize=10.1, leading=12, textColor=colors.black, spaceBefore=6, spaceAfter=3))
styles.add(ParagraphStyle(name='Body', fontName='Helvetica', fontSize=9.15, leading=11.3, textColor=colors.black, spaceAfter=1.3))
styles.add(ParagraphStyle(name='Small', fontName='Helvetica', fontSize=8.2, leading=10, textColor=colors.black))
styles.add(ParagraphStyle(name='Job', fontName='Helvetica-Bold', fontSize=9.7, leading=11.3, textColor=colors.black))
styles.add(ParagraphStyle(name='Meta', fontName='Helvetica', fontSize=8.3, leading=10, textColor=GRAY, spaceAfter=1.2))
styles.add(ParagraphStyle(name='CVBullet', fontName='Helvetica', fontSize=9.0, leading=10.9, leftIndent=10, firstLineIndent=-7, bulletIndent=0, spaceAfter=1))

def P(text, style='Body'):
    return Paragraph(text, styles[style])

def section(title):
    t = Table([[P(title.upper(), 'Section')]], colWidths=[178*mm])
    t.setStyle(TableStyle([
        ('LINEBELOW', (0,0), (-1,-1), 0.65, NAVY),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
    ]))
    return t

def job(title, org, meta, bullets):
    items = [P(f'{title}  |  {org}', 'Job'), P(meta, 'Meta')]
    for bullet in bullets:
        items.append(Paragraph(bullet, styles['CVBullet'], bulletText='-'))
    return KeepTogether(items)

doc = SimpleDocTemplate(OUT, pagesize=A4, leftMargin=16*mm, rightMargin=16*mm, topMargin=12*mm, bottomMargin=11*mm)
story = [
    P('ERIEL SETIAWAN DEWANTORO', 'Name'),
    P('Staff Admin | Data Entry | Operational Support', 'Role'),
    P('Bekasi, Jawa Barat | +62 858 8359 1786 | erieldewantoros@gmail.com', 'Contact'),
    P('linkedin.com/in/eriel-setiawan-dewantoro | github.com/erielsdewantoro', 'Link'),
    section('Profil'),
    Spacer(1, 2),
    P('Kandidat dengan pendidikan S1 Teknologi Informasi selesai Agustus 2026, berpengalaman mendukung administrasi, komunikasi operasional, koordinasi jadwal, registrasi, dokumentasi, dan kebutuhan anggota komunitas. Terbiasa bekerja secara rapi dan responsif dalam aktivitas yang melibatkan data, follow-up, serta koordinasi dengan banyak pihak. Memiliki kemampuan Microsoft Excel, Microsoft Word, Google Sheets, dan Google Workspace untuk mendukung kebutuhan administrasi dan data entry.'),
    section('Kompetensi Relevan'),
    Spacer(1, 2),
]

skills = [
    [P('<b>Administrasi &amp; Data Entry</b><br/>Microsoft Excel, Microsoft Word, Google Sheets, Google Workspace', 'Small'),
     P('<b>Koordinasi Operasional</b><br/>Penjadwalan, registrasi, follow-up, participant support', 'Small'),
     P('<b>Dokumentasi &amp; Komunikasi</b><br/>Dokumentasi kegiatan, komunikasi administratif, stakeholder communication', 'Small')],
    [P('<b>Teknis</b><br/>Basic computer/laptop troubleshooting, CSV/XLSX, GitHub', 'Small'),
     P('<b>Digital</b><br/>Canva, CapCut', 'Small'),
     P('<b>Pendukung Mapping</b><br/>Siap mempelajari Google Earth untuk kebutuhan pemetaan area', 'Small')]
]
tbl = Table(skills, colWidths=[59.3*mm, 59.3*mm, 59.4*mm])
tbl.setStyle(TableStyle([
    ('BACKGROUND', (0,0), (0,0), PALE), ('BACKGROUND', (2,0), (2,0), PALE), ('BACKGROUND', (1,1), (1,1), PALE),
    ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ('BOX', (0,0), (-1,-1), 0.3, colors.HexColor('#D9D9D9')),
    ('INNERGRID', (0,0), (-1,-1), 0.3, colors.HexColor('#D9D9D9')),
    ('LEFTPADDING', (0,0), (-1,-1), 5), ('RIGHTPADDING', (0,0), (-1,-1), 5),
    ('TOPPADDING', (0,0), (-1,-1), 4), ('BOTTOMPADDING', (0,0), (-1,-1), 4),
]))
story += [tbl, section('Pengalaman Kerja'), Spacer(1, 2)]
story += [job('Operations &amp; Member Relations', 'Club Tennis Circle Jakarta', 'Juli 2024 - Agustus 2026 | Jakarta, Indonesia', [
    'Mendukung operasional komunitas sehari-hari, termasuk komunikasi anggota, penjadwalan, registrasi, dan dukungan peserta.',
    'Mengomunikasikan pembaruan jadwal serta informasi operasional untuk membantu kelancaran koordinasi dan pengalaman anggota.',
    'Menangani pertanyaan dan kebutuhan layanan anggota secara responsif serta melakukan follow-up sesuai kebutuhan.',
    'Mendukung kegiatan tenis dan matchday antar-komunitas melalui koordinasi peserta, dukungan on-site, dan tindak lanjut operasional.'
]), Spacer(1, 2), job('Technical Support &amp; Public Relations Intern', 'Kementerian Agama Kota Bekasi', 'Desember 2025 - Februari 2026 | Bekasi, Indonesia', [
    'Mendukung komunikasi public relations dan administrasi untuk kegiatan internal serta kebutuhan organisasi.',
    'Membantu persiapan kegiatan, koordinasi panitia, dan dokumentasi untuk mendukung kelancaran aktivitas internal.',
    'Membuat dan mengedit materi visual serta komunikasi menggunakan Canva, Microsoft Word, dan CapCut.',
    'Memberikan dukungan troubleshooting dasar komputer dan laptop untuk kebutuhan operasional sehari-hari.'
])]
story += [section('Pendidikan'), Spacer(1,2), P('<b>S1 Teknologi Informasi</b>  |  Universitas Bina Sarana Informatika'), P('September 2022 - Agustus 2026 | Studi dan sidang skripsi selesai Agustus 2026 | Wisuda direncanakan November 2026', 'Meta')]
story += [section('Sertifikasi'), Spacer(1,2), P('Data Science Bootcamp - Dibimbing.id (2025, Final Score 88.09, Grade A) | Program Analyst / Analis Program - BNSP (2025) | Fundamental Database MySQL - Coding Studio (2024) | PCAP Programming Essentials in Python - Cisco Networking Academy / OpenEDG Python Institute (2023)', 'Small')]
story += [section('Bahasa'), Spacer(1,2), P('Bahasa Indonesia: Native | Bahasa Inggris: Intermediate (B1) - komunikasi sehari-hari dan konteks profesional', 'Small')]

def footer(canvas, doc):
    canvas.saveState()
    canvas.setFont('Helvetica', 7.2)
    canvas.setFillColor(colors.HexColor('#6E6E6E'))
    canvas.drawCentredString(W/2, 7*mm, 'CV tailored for Staff Admin - Data Entry and Area Mapping')
    canvas.restoreState()

doc.build(story, onFirstPage=footer)
print(OUT)
