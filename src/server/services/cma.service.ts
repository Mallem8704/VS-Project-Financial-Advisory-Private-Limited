import { calculateMpbf, calculateDscr, MpbfInputs, DscrInputs } from "@/lib/cma-engine/calculator";
import { logAuditEvent } from "../audit/audit-logger";

export class CmaService {
  computeWorkingCapitalLimits(inputs: MpbfInputs) {
    return calculateMpbf(inputs);
  }

  computeDebtServiceCoverage(inputs: DscrInputs) {
    return calculateDscr(inputs);
  }
}

export const cmaService = new CmaService();
