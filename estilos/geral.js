import metricas from "./metricas";
import cores from "./cores";
import fontes from "./fontes";

const geral = {
    container:{
        flex: 1,
        backgroundColor: cores.background
    },
    section:{
        margin: metricas.doubleBaseMargin,
    },
    sectionTitle:{
        color: cores.primario,
        fontWeight: 'bold',
        fontSize: fontes.regular,
        alignSelf: 'center',
        marginBottom: metricas.doubleBaseMargin,
    }
}