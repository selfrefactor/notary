import { notary } from './index'

const input = `
стр. 1 от 2
Скица № 15-526538-25.10.2017 г. издадена въз основа на
документ с входящ № 01-332086-24.10.2017 г.
е предоставена от АГКК, чрез информационната система
на кадастъра за нотариалното производство на нотариус
Любомира Иванова Аджарска, рег. № 294
3831
3820
3838
9645
3816
3834
3830 3833
3821
3836
3835
3837
3832
5
8
5
1
2
3
7
4
3
4
1
3
4
2
3
1
9
7
2
6
1
8
6
1
2
5
1
2
1
1
6
4
3
2
3
4
4
702
СЛУЖБА ПО ГЕОДЕЗИЯ, КАРТОГРАФИЯ И КАДАСТЪР - ГР. ВЕЛИКО ТЪРНОВО
5000, ПОЩЕНСКА КУТИЯ – 331, Бул. "Цар Т.СВЕТОСЛАВ" №59, 062/622536; 623889,
veliko.tarnovo@cadastre.bg, БУЛСТАТ:130362903
СКИЦА НА ПОЗЕМЛЕН ИМОТ
№ 15-526538-25.10.2017 г.
Поземлен имот с идентификатор 65766.702.3834
Гр. Свищов, общ. Свищов, обл. Велико Търново
По кадастралната карта и кадастралните регистри, одобрени със Заповед РД-18-10/12.02.2009 г.
на ИЗПЪЛНИТЕЛЕН ДИРЕКТОР НА АГКК
Последно изменение със заповед: няма издадена заповед за изменение в КККР
Адрес на поземления имот: гр. Свищов, п.к. 5250, ул. "Трети март" № 105
Площ: 553 кв.м
Трайно предназначение на територията: Урбанизирана
Начин на трайно ползване: За друг обществен обект, комплекс
Координатна система БГС2005
М 1:500
Стар идентификатор: няма
Номер по предходен план: квартал: 97, парцел: ХІІ-3834
Съседи: 65766.702.9645, 65766.702.3835, 65766.702.3836, 65766.702.3833, 65766.702.3832,
65766.702.3831
Подписан с цифров сертификат Ivan Evtimov Anastasov
DN: E=anastasov.i@cadastre.bg, CN=Ivan Evtimov Anastasov,
OU=BULSTAT:130362903, OU=Professional Certificate - UES,
O="Agentsia po geodezia, kartografia i kadastar", S=, C=BG
стр. 2 от 2
Скица № 15-526538-25.10.2017 г. издадена въз основа на
документ с входящ № 01-332086-24.10.2017 г.
е предоставена от АГКК, чрез информационната система
на кадастъра за нотариалното производство на нотариус
Любомира Иванова Аджарска, рег. № 294
Digitally singed by:
Ivan Evtimov Anastasov
Собственици:
1. ВЕНЕТА ПЕТРОВА ИЛИЕВА
Ид. част 1/3/1/2, площ от 553 кв.м. от правото на собственост
Нотариален акт № 17 том XV рег. 5419 дело 1721 от 15.12.2009г., издаден от Служба по вписванията
гр.Свищов
2. АСЕН ПЕТРОВ ИЛИЕВ
Ид. част 1/2, площ от 553 кв.м. от правото на собственост
Нотариален акт № 126 том X рег. 4126 дело 1431 от 29.10.2009г., издаден от Служба по вписванията
гр.Свищов
3. Крум Илиев Петров
Няма данни за идеалните части
Нотариален акт № 191 том ІІ дело 471 от 27.07.1970г., издаден от Районен съд - гр. Свищов
Ид. част 1/2, площ 560 кв.м. от правото на собственост
Протокол за съдебна делба от 27.08.1970г., издаден от Народен съд гр.Свищов
Носители на други вещни права:
1. Асен Петров Илиев
Право на строеж
площ 30 кв.м.
Нотариален акт № 1 том 14 рег. 4424 дело 1788 от 29.12.2010г., издаден от Служба по вписванията
гр.Свищов
Скицата да послужи за: Нотариус
`

const result = notary(input)
console.log(result)
