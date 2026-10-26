from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Table, TableStyle
OUT=r'C:\Eriel\Codex_Erl\outputs\CV_Eriel_Staff_Admin_Data_Entry_ID.pdf'
st=getSampleStyleSheet()
st.add(ParagraphStyle(name='Name',fontName='Times-Bold',fontSize=16.5,leading=18.2,alignment=TA_CENTER,spaceAfter=2))
st.add(ParagraphStyle(name='Contact',fontName='Times-Roman',fontSize=9.8,leading=11.2,alignment=TA_CENTER,spaceAfter=5))
st.add(ParagraphStyle(name='Sec',fontName='Times-Bold',fontSize=12,leading=13.2,spaceBefore=5.5,spaceAfter=1))
st.add(ParagraphStyle(name='Body',fontName='Times-Roman',fontSize=10.15,leading=11.35,spaceAfter=.5))
st.add(ParagraphStyle(name='Item',fontName='Times-Bold',fontSize=10.8,leading=11.6,spaceAfter=0))
st.add(ParagraphStyle(name='Role',fontName='Times-Bold',fontSize=10.65,leading=11.4,spaceAfter=0))
st.add(ParagraphStyle(name='Bul',fontName='Times-Roman',fontSize=10,leading=11,leftIndent=11,firstLineIndent=-7,bulletIndent=0,spaceAfter=0))
st.add(ParagraphStyle(name='Small',fontName='Times-Roman',fontSize=10,leading=10.9,spaceAfter=0))
def P(x,n='Body'): return Paragraph(x,st[n])
def S(x):
 t=Table([[P(x.upper(),'Sec')]],colWidths=[185*mm]);t.setStyle(TableStyle([('LINEBELOW',(0,0),(-1,-1),.8,colors.black),('LEFTPADDING',(0,0),(-1,-1),0),('RIGHTPADDING',(0,0),(-1,-1),0),('TOPPADDING',(0,0),(-1,-1),0),('BOTTOMPADDING',(0,0),(-1,-1),1)]));return t
def I(a,b):
 right_style='Item' if len(b) <= 30 else 'DateLong'
 if right_style == 'DateLong' and 'DateLong' not in st: st.add(ParagraphStyle(name='DateLong',fontName='Times-Bold',fontSize=9.7,leading=11.1,spaceAfter=0))
 t=Table([[P(a,'Item'),P(b,right_style)]],colWidths=[110*mm,75*mm]);t.setStyle(TableStyle([('ALIGN',(1,0),(1,0),'RIGHT'),('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),0),('RIGHTPADDING',(0,0),(-1,-1),0),('TOPPADDING',(0,0),(-1,-1),0),('BOTTOMPADDING',(0,0),(-1,-1),0)]));return t
def B(items): return [Paragraph(x,st['Bul'],bulletText='•') for x in items]
d=SimpleDocTemplate(OUT,pagesize=A4,leftMargin=12.7*mm,rightMargin=12.7*mm,topMargin=12.2*mm,bottomMargin=10.5*mm)
x=[P('ERIEL SETIAWAN DEWANTORO','Name'),P('Bekasi, Jawa Barat, Indonesia | erieldewantoros@gmail.com | +62 858 8359 1786 | <font color="blue"><u>LinkedIn</u></font> | <font color="blue"><u>GitHub</u></font>','Contact'),S('Profil Profesional'),P('Kandidat fresh graduate Teknologi Informasi yang telah menyelesaikan studi dan sidang skripsi pada Agustus 2026, dengan pengalaman dalam dukungan administrasi, koordinasi operasional, komunikasi anggota, registrasi, dan dokumentasi. Terbiasa menggunakan Microsoft Excel, Word, PowerPoint, Google Sheets, Google Workspace, dan Google Earth untuk data entry, mapping area, dan kebutuhan administrasi harian. Teliti, responsif, memiliki laptop pribadi, dan siap bekerja di area Cinere.'),S('Pendidikan'),I('Universitas Bina Sarana Informatika','Sep 2022 - Agu 2026'),P('S1 Teknologi Informasi','Role'),P('Studi dan sidang skripsi selesai pada Agustus 2026. Wisuda/formal graduation dijadwalkan pada November 2026.','Small'),S('Pengalaman Kerja'),I('Club Tennis Circle Jakarta','Jul 2024 - Nov 2025 | Mar 2026 - Present'),P('Operations &amp; Member Relations','Role')]
x+=B(['Mendukung operasional komunitas sehari-hari, termasuk komunikasi anggota, penjadwalan, registrasi, dan dukungan peserta.','Mengoordinasikan pembaruan jadwal dan informasi operasional untuk membantu menjaga komunikasi yang akurat serta pengalaman anggota yang positif.','Menangani pertanyaan dan kebutuhan layanan anggota secara responsif, termasuk melakukan follow-up atas kebutuhan operasional.','Mendukung aktivitas tenis dan matchday antar-komunitas melalui koordinasi peserta serta bantuan operasional on-site.'])
x += [I('Kementerian Agama Kota Bekasi','Des 2025 - Feb 2026'),P('Technical Support &amp; Public Relations Intern','Role')]
x += B(['Mendukung komunikasi administratif, dokumentasi, serta persiapan kegiatan internal dan kebutuhan organisasi.','Membantu koordinasi dan kegiatan kepanitiaan internal untuk mendukung kelancaran acara serta operasional sehari-hari.','Membuat materi visual dan komunikasi menggunakan Canva, Microsoft Word, dan CapCut, serta memberikan troubleshooting dasar komputer dan laptop.'])
x += [S('Keahlian Relevan'),P('<b>Administrasi &amp; Data Entry:</b> Microsoft Excel, Microsoft Word, Microsoft PowerPoint, Google Sheets, Google Workspace, data entry, dokumentasi, administrative support.','Small'),P('<b>Mapping &amp; Operasional:</b> Google Earth, mapping area, penjadwalan, registrasi, koordinasi operasional, participant support, follow-up.','Small'),P('<b>Teknis &amp; Kesiapan Kerja:</b> Troubleshooting dasar komputer/laptop, laptop pribadi, siap bekerja di Cinere.','Small'),P('<b>Soft Skills:</b> Komunikasi, ketelitian, problem solving, adaptabilitas, stakeholder communication, kerja sama tim, time management.','Small'),S('Sertifikasi')]
for a in ['Data Science Bootcamp - Dibimbing.id | 2025 | Final Score: 88.09 | Grade: A','Program Analyst / Analis Program - BNSP | 2025','PCAP: Programming Essentials in Python - Cisco Networking Academy / OpenEDG Python Institute | 2023','Fundamental Database MySQL - Coding Studio | 2024']: x.append(Paragraph('<font color="blue"><u>'+a+'</u></font>',st['Small'],bulletText='•'))
x += [S('Bahasa'),P('Bahasa Indonesia: Native | Bahasa Inggris: Intermediate / B1 - dapat digunakan untuk komunikasi sehari-hari dan konteks profesional','Small')]
d.build(x);print(OUT)
